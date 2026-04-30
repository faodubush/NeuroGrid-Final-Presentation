import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface NeuroLatticeProps {
  density?: number;
  className?: string;
}

function Lattice({ density = 7 }: { density?: number }) {
  const group = useRef<THREE.Group>(null!);
  const linesRef = useRef<THREE.LineSegments>(null!);

  const { positions, linePositions, colorPalette } = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    const spacing = 2.2;
    const n = density;
    for (let x = 0; x < n; x++) {
      for (let y = 0; y < n; y++) {
        for (let z = 0; z < n; z++) {
          pts.push(
            new THREE.Vector3(
              (x - (n - 1) / 2) * spacing,
              (y - (n - 1) / 2) * spacing,
              (z - (n - 1) / 2) * spacing,
            ),
          );
        }
      }
    }
    const positions = new Float32Array(pts.length * 3);
    pts.forEach((p, i) => {
      positions[i * 3] = p.x;
      positions[i * 3 + 1] = p.y;
      positions[i * 3 + 2] = p.z;
    });

    // Build lines between near neighbors only (axial + small diagonals)
    const linePts: number[] = [];
    const idx = (x: number, y: number, z: number) => x * n * n + y * n + z;
    for (let x = 0; x < n; x++) {
      for (let y = 0; y < n; y++) {
        for (let z = 0; z < n; z++) {
          const a = pts[idx(x, y, z)];
          const neighbors: Array<[number, number, number]> = [
            [x + 1, y, z],
            [x, y + 1, z],
            [x, y, z + 1],
          ];
          for (const [nx, ny, nz] of neighbors) {
            if (nx < n && ny < n && nz < n) {
              const b = pts[idx(nx, ny, nz)];
              linePts.push(a.x, a.y, a.z, b.x, b.y, b.z);
            }
          }
        }
      }
    }
    const linePositions = new Float32Array(linePts);

    // Soft pastel palette: mint, rose, sky
    const colorPalette = [
      new THREE.Color("#A7F3D0"), // mint
      new THREE.Color("#FBCFE8"), // rose-ish
      new THREE.Color("#BAE6FD"), // sky
    ];

    return { positions, linePositions, colorPalette };
  }, [density]);

  // Per-point color attribute
  const pointColors = useMemo(() => {
    const arr = new Float32Array((positions.length / 3) * 3);
    for (let i = 0; i < positions.length / 3; i++) {
      const c = colorPalette[i % colorPalette.length];
      arr[i * 3] = c.r;
      arr[i * 3 + 1] = c.g;
      arr[i * 3 + 2] = c.b;
    }
    return arr;
  }, [positions, colorPalette]);

  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.05;
      group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.15) * 0.15;
    }
    if (linesRef.current) {
      const mat = linesRef.current.material as THREE.LineBasicMaterial;
      mat.opacity = 0.18 + Math.sin(state.clock.elapsedTime * 0.6) * 0.04;
    }
  });

  return (
    <group ref={group}>
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
            count={positions.length / 3}
          />
          <bufferAttribute
            attach="attributes-color"
            args={[pointColors, 3]}
            count={pointColors.length / 3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.14}
          vertexColors
          transparent
          opacity={0.9}
          sizeAttenuation
          depthWrite={false}
        />
      </points>
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[linePositions, 3]}
            count={linePositions.length / 3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#93C5FD" transparent opacity={0.2} depthWrite={false} />
      </lineSegments>
    </group>
  );
}

export default function NeuroLattice({ density = 7, className = "" }: NeuroLatticeProps) {
  return (
    <div className={`pointer-events-none absolute inset-0 ${className}`} aria-hidden>
      <Canvas
        dpr={[1, 1.6]}
        camera={{ position: [0, 0, 18], fov: 55 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <ambientLight intensity={0.6} />
        <Lattice density={density} />
      </Canvas>
    </div>
  );
}
