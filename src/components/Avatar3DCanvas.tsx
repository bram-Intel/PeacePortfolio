import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { Magnet } from './Magnet';

export const Avatar3DCanvas: React.FC<{ className?: string }> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const width = container.clientWidth || 360;
    const height = container.clientHeight || 420;
    const isMobile = window.innerWidth < 768;

    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 1000);
    camera.position.set(0, 0.05, isMobile ? 4.8 : 4.1);

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      container.appendChild(renderer.domElement);
    } catch (e) {
      console.error('WebGL Renderer init failed:', e);
      setHasError(true);
      return;
    }

    // Handle Mobile WebGL Context Loss & Restoration
    const handleContextLost = (event: Event) => {
      event.preventDefault();
      console.warn('Avatar3D WebGL context lost. Attempting auto-restore...');
    };

    const handleContextRestored = () => {
      setHasError(false);
    };

    renderer.domElement.addEventListener('webglcontextlost', handleContextLost, false);
    renderer.domElement.addEventListener('webglcontextrestored', handleContextRestored, false);

    // 2. Clean Studio Lighting for Portrait Bust
    const ambientLight = new THREE.AmbientLight(0xffffff, 2.2);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.2);
    keyLight.position.set(4, 6, 5);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x93c5fd, 1.5);
    fillLight.position.set(-5, 1, 2);
    scene.add(fillLight);

    const rimLight = new THREE.PointLight(0x2563eb, 1.8);
    rimLight.position.set(0, 2.5, -3);
    scene.add(rimLight);

    // 3. Orbit Controls (drag to inspect slightly, no zoom/pan)
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.enableDamping = true;
    controls.dampingFactor = 0.06;

    // 4. Load & Auto-Center GLB Model
    const pivotGroup = new THREE.Group();
    pivotGroup.visible = false;
    scene.add(pivotGroup);

    let baseScale = 1;
    let modelReady = false;
    const loader = new GLTFLoader();

    loader.load(
      '/assets/avatar_3d.glb',
      (gltf) => {
        const rawScene = gltf.scene;

        rawScene.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            const mesh = child as THREE.Mesh;
            if (mesh.material) {
              if (Array.isArray(mesh.material)) {
                mesh.material.forEach((mat) => {
                  mat.needsUpdate = true;
                });
              } else {
                mesh.material.needsUpdate = true;
              }
            }
          }
        });

        // Compute bounding box so any generated GLB centers cleanly in the viewport
        const box = new THREE.Box3().setFromObject(rawScene);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z) || 1;

        rawScene.position.set(-center.x, -center.y, -center.z);
        pivotGroup.add(rawScene);

        const mobileNow = window.innerWidth < 768;
        baseScale = (mobileNow ? 2.15 : 2.32) / maxDim;

        pivotGroup.position.set(0, -1.2, 0);
        pivotGroup.scale.setScalar(0.05 * baseScale);
        modelReady = true;
        setHasError(false);
      },
      undefined,
      (err) => {
        console.error('Error loading 3D GLB model:', err);
        setHasError(true);
      }
    );

    // 5. Mouse & Touch Head Tracking
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const windowHalfX = window.innerWidth / 2;
      const windowHalfY = window.innerHeight / 2;
      targetX = (event.clientX - windowHalfX) * 0.0011;
      targetY = (event.clientY - windowHalfY) * 0.0007;
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (event.touches.length > 0) {
        const touch = event.touches[0];
        const windowHalfX = window.innerWidth / 2;
        const windowHalfY = window.innerHeight / 2;
        targetX = (touch.clientX - windowHalfX) * 0.0016;
        targetY = (touch.clientY - windowHalfY) * 0.001;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    // 6. IntersectionObserver for smart mobile GPU pausing off-screen
    let isIntersecting = true;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isIntersecting = entry.isIntersecting;
        });
      },
      { threshold: 0.08 }
    );
    observer.observe(container);

    // 7. Render Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();
    let materializeTime = 0;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (!isIntersecting) return;

      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();
      const mobileCheck = window.innerWidth < 768;
      const targetPosY = mobileCheck ? -0.05 : -0.18;

      if (modelReady) {
        materializeTime += delta;
        pivotGroup.visible = true;

        const progress = Math.min(1.0, materializeTime / 1.1);
        const easeProgress = 1 - Math.pow(1 - progress, 3);

        const currentScale = THREE.MathUtils.lerp(0.1 * baseScale, baseScale, easeProgress);
        pivotGroup.scale.setScalar(currentScale);

        pivotGroup.rotation.y += (targetX - pivotGroup.rotation.y) * 0.08;
        pivotGroup.rotation.x += (-targetY - pivotGroup.rotation.x) * 0.08;

        const floatY = Math.sin(elapsedTime * 1.6) * 0.035;
        const currentPosY = THREE.MathUtils.lerp(-1.2, targetPosY, easeProgress);
        pivotGroup.position.y = currentPosY + (progress >= 1.0 ? floatY : 0);
      }

      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    // 8. Handle Resize
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      if (!newWidth || !newHeight) return;
      const mobileCheck = window.innerWidth < 768;

      camera.aspect = newWidth / newHeight;
      camera.position.set(0, 0.05, mobileCheck ? 4.8 : 4.1);
      camera.updateProjectionMatrix();

      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      observer.disconnect();
      if (renderer && renderer.domElement) {
        renderer.domElement.removeEventListener('webglcontextlost', handleContextLost);
        renderer.domElement.removeEventListener('webglcontextrestored', handleContextRestored);
      }
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container && renderer && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      if (renderer) renderer.dispose();
    };
  }, []);

  if (hasError) {
    return (
      <div className={`relative w-full h-[280px] sm:h-[340px] md:h-[310px] lg:h-[350px] flex items-center justify-center ${className}`}>
        <Magnet padding={100} strength={3} className="w-full flex justify-center">
          <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full bg-gradient-to-br from-[#0B4F6C] via-[#2563EB] to-[#38BDF8] flex items-center justify-center shadow-2xl border-4 border-white/30">
            <span className="text-white font-black text-5xl tracking-tighter">JP</span>
          </div>
        </Magnet>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-[280px] sm:h-[340px] md:h-[310px] lg:h-[350px] flex items-center justify-center bg-transparent ${className}`}
    />
  );
};
