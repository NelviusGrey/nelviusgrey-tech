"use client";

import { Float, Line, PerspectiveCamera, Sparkles } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { motion, useInView, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Component, type ReactNode, useMemo, useRef } from "react";
import type { Group } from "three";

function generateRidges() {
  return Array.from({ length: 9 }, (_, ridgeIndex) => {
    const radius = 0.46 + ridgeIndex * 0.145;
    const start = -Math.PI * (0.88 - ridgeIndex * 0.018);
    const end = Math.PI * (0.76 - ridgeIndex * 0.012);
    const points: Array<[number, number, number]> = [];

    for (let step = 0; step <= 86; step += 1) {
      const progress = step / 86;
      const angle = start + (end - start) * progress;
      const wave = Math.sin(progress * Math.PI * 2 + ridgeIndex * 0.55) * 0.035;
      const split = ridgeIndex < 4 && progress > 0.38 ? (progress - 0.38) * ridgeIndex * 0.035 : 0;
      const x = Math.cos(angle) * (radius + wave) + split;
      const y = Math.sin(angle) * (radius * 1.23 + wave) - ridgeIndex * 0.025;
      const z = Math.sin(progress * Math.PI + ridgeIndex) * 0.08 - ridgeIndex * 0.015;
      points.push([x, y, z]);
    }

    return points;
  });
}

function FingerprintField() {
  const groupRef = useRef<Group>(null);
  const ridges = useMemo(() => generateRidges(), []);

  useFrame(({ clock, pointer }) => {
    if (!groupRef.current || document.hidden) {
      return;
    }

    const elapsed = clock.getElapsedTime();
    groupRef.current.rotation.y = Math.sin(elapsed * 0.16) * 0.12 + pointer.x * 0.14;
    groupRef.current.rotation.x = -0.08 + pointer.y * 0.08;
    groupRef.current.position.y = Math.sin(elapsed * 0.24) * 0.025;
  });

  return (
    <group ref={groupRef} position={[0, 0.02, 0]}>
      <Float speed={0.58} rotationIntensity={0.14} floatIntensity={0.18}>
        {ridges.map((points, index) => (
          <Line
            key={index}
            points={points}
            color={index % 3 === 0 ? "#c7b98a" : "#00a438"}
            lineWidth={index % 3 === 0 ? 0.8 : 1.35}
            transparent
            opacity={index % 3 === 0 ? 0.24 : 0.62}
          />
        ))}
        <Sparkles
          count={66}
          scale={[3.1, 2.4, 1.2]}
          size={1.6}
          speed={0.18}
          opacity={0.32}
          color="#00a438"
        />
        <mesh position={[0.08, -0.04, -0.18]} rotation={[0.1, 0.25, -0.12]}>
          <torusKnotGeometry args={[0.46, 0.004, 128, 8, 2, 3]} />
          <meshBasicMaterial color="#00a438" transparent opacity={0.18} />
        </mesh>
      </Float>
    </group>
  );
}

function SculptureFallback() {
  return (
    <div className="relative grid min-h-[24rem] place-items-center overflow-hidden border border-[color:var(--line-green)] bg-[color:var(--carbon)]/72">
      <div className="topographic-lines absolute inset-0 opacity-50" />
      <div className="absolute inset-8 rounded-full border border-[color:var(--brand-green)]/25" />
      <div className="absolute inset-16 rounded-full border border-[color:var(--brand-green)]/18" />
      <div className="relative h-52 w-52 rounded-full border border-[color:var(--brand-green)]/45 shadow-[0_0_70px_rgba(0,164,56,0.24)]" />
    </div>
  );
}

class WebGLErrorBoundary extends Component<
  { children: ReactNode; fallback: ReactNode },
  { failed: boolean }
> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  override render() {
    if (this.state.failed) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}

export function HeroSculpture() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const visible = useInView(containerRef, { margin: "180px" });
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.28], [0, 54]);
  const opacity = useTransform(scrollYProgress, [0, 0.35], [1, 0.62]);

  if (prefersReducedMotion) {
    return <SculptureFallback />;
  }

  return (
    <motion.div
      ref={containerRef}
      className="relative h-full min-h-[27rem] w-full overflow-hidden rounded-[42%_58%_46%_54%/54%_44%_56%_46%] border border-[color:var(--line-green)]/45 bg-[radial-gradient(circle_at_50%_55%,rgba(0,164,56,.13),rgba(4,12,8,.74)_58%,transparent_76%)] shadow-[0_0_90px_rgba(0,164,56,.12)] lg:min-h-[39rem]"
      style={{ y, opacity }}
      aria-hidden="true"
    >
      <div className="site-grid absolute inset-0 opacity-20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(0,164,56,0.24),transparent_42%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent)]" />
      <WebGLErrorBoundary fallback={<SculptureFallback />}>
        <Canvas
          gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
          dpr={[1, 1.45]}
          frameloop={visible ? "always" : "never"}
        >
          <PerspectiveCamera makeDefault position={[0, 0, 3.2]} fov={42} />
          <ambientLight intensity={0.8} />
          <FingerprintField />
        </Canvas>
      </WebGLErrorBoundary>
      <div className="absolute bottom-4 left-4 font-mono text-[0.62rem] uppercase tracking-[0.24em] text-white/32">
        Biometric intelligence field
      </div>
      <div className="travelling-line absolute left-4 right-4 top-4 h-px opacity-70" />
    </motion.div>
  );
}
