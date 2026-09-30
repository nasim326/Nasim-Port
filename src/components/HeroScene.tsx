import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface HeroSceneProps {
  scrollY?: number;
}

export const HeroScene: React.FC<HeroSceneProps> = ({ scrollY = 0 }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [webGLError, setWebGLError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check WebGL availability
    const canvas = document.createElement('canvas');
    const gl =
      canvas.getContext('webgl2') ||
      canvas.getContext('webgl') ||
      canvas.getContext('experimental-webgl');
    if (!gl) {
      setWebGLError(true);
      return;
    }

    let animationFrameId: number;
    let renderer: THREE.WebGLRenderer | null = null;
    let scene: THREE.Scene | null = null;
    let camera: THREE.PerspectiveCamera | null = null;
    let mesh: THREE.Mesh | null = null;
    let ringMesh: THREE.Mesh | null = null;
    let particlesMesh: THREE.Points | null = null;

    try {
      scene = new THREE.Scene();

      const width = container.clientWidth;
      const height = container.clientHeight;

      camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
      camera.position.z = 6.2;

      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.1;

      // Ensure canvas fills container
      renderer.domElement.style.width = '100%';
      renderer.domElement.style.height = '100%';
      renderer.domElement.style.display = 'block';
      container.appendChild(renderer.domElement);

      // Procedural Liquid Glass Torus Knot
      const geometry = new THREE.TorusKnotGeometry(1.4, 0.42, 140, 32, 2, 3);
      
      const glassMaterial = new THREE.MeshPhysicalMaterial({
        color: new THREE.Color('#93c5fd'),
        metalness: 0.15,
        roughness: 0.08,
        transmission: 0.88,
        ior: 1.52,
        clearcoat: 1.0,
        clearcoatRoughness: 0.08,
        thickness: 1.2,
        attenuationColor: new THREE.Color('#60a5fa'),
        attenuationDistance: 1.5,
        transparent: true,
        opacity: 0.95,
      });

      mesh = new THREE.Mesh(geometry, glassMaterial);
      scene.add(mesh);

      // Subtle outer iridescent orbit ring
      const ringGeo = new THREE.TorusGeometry(2.35, 0.02, 16, 100);
      const ringMat = new THREE.MeshStandardMaterial({
        color: new THREE.Color('#38bdf8'),
        metalness: 0.9,
        roughness: 0.2,
        emissive: new THREE.Color('#0284c7'),
        emissiveIntensity: 0.3,
        transparent: true,
        opacity: 0.4,
      });
      ringMesh = new THREE.Mesh(ringGeo, ringMat);
      ringMesh.rotation.x = Math.PI / 3;
      scene.add(ringMesh);

      // Ambient Floating Stardust (Lightweight procedural particle field)
      const particleCount = 100;
      const particleGeo = new THREE.BufferGeometry();
      const positions = new Float32Array(particleCount * 3);
      const particleColors = new Float32Array(particleCount * 3);

      const colorCyan = new THREE.Color('#67e8f9');
      const colorViolet = new THREE.Color('#c084fc');

      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 10;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 8;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 6;

        const mixedColor = Math.random() > 0.5 ? colorCyan : colorViolet;
        particleColors[i * 3] = mixedColor.r;
        particleColors[i * 3 + 1] = mixedColor.g;
        particleColors[i * 3 + 2] = mixedColor.b;
      }

      particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      particleGeo.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

      const particleMat = new THREE.PointsMaterial({
        size: 0.05,
        vertexColors: true,
        transparent: true,
        opacity: 0.7,
        blending: THREE.AdditiveBlending,
      });

      particlesMesh = new THREE.Points(particleGeo, particleMat);
      scene.add(particlesMesh);

      // Studio Lighting Choreography
      const ambientLight = new THREE.AmbientLight(0x0a1020, 1.8);
      scene.add(ambientLight);

      // Key light: Cyan glow
      const keyLight = new THREE.DirectionalLight(0x38bdf8, 2.5);
      keyLight.position.set(4, 3, 5);
      scene.add(keyLight);

      // Rim light: Violet glow
      const rimLight = new THREE.DirectionalLight(0xa855f7, 2.8);
      rimLight.position.set(-4, -2, -3);
      scene.add(rimLight);

      // Accent light: Crisp White top highlight
      const topLight = new THREE.PointLight(0xffffff, 1.8, 12);
      topLight.position.set(0, 4, 3);
      scene.add(topLight);

      // Mouse interactivity with smooth lerping
      let targetMouseX = 0;
      let targetMouseY = 0;
      let currentMouseX = 0;
      let currentMouseY = 0;

      const handleMouseMove = (e: MouseEvent) => {
        const { innerWidth, innerHeight } = window;
        targetMouseX = (e.clientX / innerWidth - 0.5) * 1.5;
        targetMouseY = (e.clientY / innerHeight - 0.5) * 1.5;
      };

      window.addEventListener('mousemove', handleMouseMove, { passive: true });

      // Handle Resize
      const handleResize = () => {
        if (!container || !renderer || !camera) return;
        const newWidth = container.clientWidth;
        const newHeight = container.clientHeight;
        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(newWidth, newHeight);
      };

      window.addEventListener('resize', handleResize);

      // Reduced motion check
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      // Animation Loop
      let clock = new THREE.Clock();

      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);

        const elapsedTime = clock.getElapsedTime();
        const delta = clock.getDelta();

        // Smooth mouse damping
        currentMouseX += (targetMouseX - currentMouseX) * 0.05;
        currentMouseY += (targetMouseY - currentMouseY) * 0.05;

        if (mesh) {
          if (!prefersReducedMotion) {
            mesh.rotation.x = elapsedTime * 0.18 + currentMouseY * 0.6;
            mesh.rotation.y = elapsedTime * 0.25 + currentMouseX * 0.8;
            // Gentle floating vertical breathing
            mesh.position.y = Math.sin(elapsedTime * 0.8) * 0.12;
          } else {
            mesh.rotation.y = currentMouseX * 0.3;
            mesh.rotation.x = currentMouseY * 0.3;
          }
        }

        if (ringMesh && !prefersReducedMotion) {
          ringMesh.rotation.z = -elapsedTime * 0.12;
          ringMesh.rotation.y = currentMouseX * 0.4;
        }

        if (particlesMesh && !prefersReducedMotion) {
          particlesMesh.rotation.y = elapsedTime * 0.03;
          particlesMesh.rotation.x = elapsedTime * 0.015;
        }

        if (renderer && scene && camera) {
          renderer.render(scene, camera);
        }
      };

      animate();
      setIsLoaded(true);

      // Context lost/restored handling
      const handleContextLost = (event: Event) => {
        event.preventDefault();
        cancelAnimationFrame(animationFrameId);
        setWebGLError(true);
      };

      const canvasEl = renderer.domElement;
      canvasEl.addEventListener('webglcontextlost', handleContextLost, false);

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('resize', handleResize);
        canvasEl.removeEventListener('webglcontextlost', handleContextLost);
        cancelAnimationFrame(animationFrameId);

        if (renderer && container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
          renderer.dispose();
        }
        geometry.dispose();
        glassMaterial.dispose();
        ringGeo.dispose();
        ringMat.dispose();
        particleGeo.dispose();
        particleMat.dispose();
      };
    } catch (err) {
      console.warn('WebGL initialization failed, falling back to CSS glass visualizer', err);
      setWebGLError(true);
    }
  }, []);

  // Compute scroll influence: gentle scale and fade as user scrolls down
  const scrollRatio = Math.min(scrollY / 700, 1);
  const opacity = Math.max(1 - scrollRatio * 0.9, 0.05);
  const scale = Math.max(1 - scrollRatio * 0.25, 0.75);
  const translateY = scrollRatio * 60;

  if (webGLError) {
    return (
      <div
        className="w-full h-full flex items-center justify-center transition-all duration-700 pointer-events-none"
        style={{
          opacity,
          transform: `translateY(${translateY}px) scale(${scale})`,
        }}
      >
        {/* Graceful CSS Liquid Glass Orb Fallback */}
        <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500/20 via-blue-600/10 to-violet-500/25 blur-3xl animate-pulse" />
          <div className="relative w-48 h-48 md:w-72 md:h-72 rounded-full border border-white/20 bg-white/[0.04] backdrop-blur-2xl shadow-[0_0_60px_rgba(56,189,248,0.25)] flex items-center justify-center overflow-hidden">
            <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-white/30 to-transparent rounded-full filter blur-xl transform rotate-45" />
            <div className="w-28 h-28 md:w-44 md:h-44 rounded-full border border-cyan-400/30 bg-gradient-to-tr from-cyan-500/10 to-purple-500/10 animate-spin" style={{ animationDuration: '24s' }} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={`w-full h-full pointer-events-none transition-opacity duration-1000 ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        opacity,
        transform: `translateY(${translateY}px) scale(${scale})`,
        transition: 'transform 0.15s ease-out, opacity 0.3s ease-out',
      }}
    />
  );
};
