import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sparkles } from '@react-three/drei';
import * as THREE from 'three';

interface ParticleFieldProps {
  count?: number;
  mousePosition: { x: number; y: number };
}

function ParticleField({ count = 100, mousePosition }: ParticleFieldProps) {
  const mesh = useRef<THREE.Points>(null);

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 5;
      
      velocities[i * 3] = (Math.random() - 0.5) * 0.02;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.02;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.01;
    }
    
    return { positions, velocities };
  }, [count]);

  useFrame(() => {
    if (!mesh.current) return;
    
    const positions = mesh.current.geometry.attributes.position.array as Float32Array;
    
    for (let i = 0; i < count; i++) {
      // Add mouse influence
      positions[i * 3] += particles.velocities[i * 3] + mousePosition.x * 0.01;
      positions[i * 3 + 1] += particles.velocities[i * 3 + 1] + mousePosition.y * 0.01;
      positions[i * 3 + 2] += particles.velocities[i * 3 + 2];
      
      // Wrap around
      if (positions[i * 3] > 5) positions[i * 3] = -5;
      if (positions[i * 3] < -5) positions[i * 3] = 5;
      if (positions[i * 3 + 1] > 5) positions[i * 3 + 1] = -5;
      if (positions[i * 3 + 1] < -5) positions[i * 3 + 1] = 5;
    }
    
    mesh.current.geometry.attributes.position.needsUpdate = true;
    mesh.current.rotation.y += 0.001;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[particles.positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#06b6d4"
        sizeAttenuation
        transparent
        opacity={0.6}
      />
    </points>
  );
}

interface Hero3DProps {
  mousePosition: { x: number; y: number };
}

export default function Hero3D({ mousePosition }: Hero3DProps) {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 3], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <ParticleField count={150} mousePosition={mousePosition} />
        <Sparkles
          count={50}
          scale={8}
          size={2}
          speed={0.4}
          color="#06b6d4"
          opacity={0.3}
        />
      </Canvas>
    </div>
  );
}
