import { Canvas, ThreeElements, useFrame } from '@react-three/fiber/native';
import * as THREE from 'three';
import React, { useRef, useState } from 'react';
import { randomColor, randomDirection } from '../../utils/random';

type objectProps = {
  color?: string;
  size?: number;
  direction: 'x' | 'y' | 'z';
  velocity?: number;
  onSelect?: () => void;
} & ThreeElements['mesh'];
export default function Box({ color, size, onSelect, direction, velocity, ...props }: objectProps) {
  const [colorValue, setColor] = useState(color);
  const [directionValue, setDirectionValue] = useState(direction);

  const meshRef = useRef<THREE.Mesh>(null!);
  useFrame(() => (meshRef.current.rotation[directionValue] += velocity || 0.011));
  return (
    <mesh
      {...props}
      onClick={() => {
        setColor(randomColor());
        setDirectionValue(randomDirection());
      }}
      ref={meshRef}
      scale={size}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={colorValue} />
    </mesh>
  );
}
