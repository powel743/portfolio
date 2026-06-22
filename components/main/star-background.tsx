"use client";

import {
  Points,
  PointMaterial,
  type PointsInstancesProps,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import * as random from "maath/random";
import { useState, useRef, Suspense } from "react";
import type { Points as PointsType } from "three";

// Must be a multiple of the point stride (3) so every (x, y, z) triplet is
// complete; otherwise `inSphere` leaves NaN values that make
// `computeBoundingSphere()` return a NaN radius.
const NUM_POINTS = 5001;

export const StarBackground = (props: PointsInstancesProps) => {
  const ref = useRef<PointsType | null>(null);
  const [sphere] = useState(() => {
    const positions = random.inSphere(new Float32Array(NUM_POINTS), {
      radius: 1.2,
    }) as Float32Array;

    // Safety net: replace any non-finite value so the bounding sphere is valid.
    for (let i = 0; i < positions.length; i++) {
      if (!Number.isFinite(positions[i])) positions[i] = 0;
    }

    return positions;
  });

  useFrame((_state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        stride={3}
        positions={sphere}
        frustumCulled
        {...props}
      >
        <PointMaterial
          transparent
          color="#fff"
          size={0.002}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

export const StarsCanvas = () => (
  <div className="w-full h-auto fixed inset-0 -z-10">
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <StarBackground />
      </Suspense>
    </Canvas>
  </div>
);
