import { ThreeElements, useFrame } from '@react-three/fiber/native';
import { animated, useSpring } from '@react-spring/three';
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

export default function Box({ color, size = 1, onSelect, direction, velocity, ...props }: objectProps) {
  const [colorValue, setColor] = useState(color);
  const [directionValue, setDirectionValue] = useState(direction);
  const [pressed, setPressed] = useState(false);

  const meshRef = useRef<THREE.Mesh>(null!);
  useFrame(() => (meshRef.current.rotation[directionValue] += velocity || 0.011));

  const spring = useSpring({
    from: { scale: [size * 0.75, size * 0.75, size * 0.75] as [number, number, number] },
    to: { scale: pressed ? ([size * 1.15, size * 1.15, size * 1.15] as [number, number, number]) : ([size, size, size] as [number, number, number]) },
    config: { tension: 170, friction: 16 },
  });

  return (
    <animated.mesh
      {...props}
      onClick={() => {
        setColor(randomColor());
        setDirectionValue(randomDirection());
        onSelect?.();
      }}
      onPointerDown={() => setPressed(true)}
      onPointerUp={() => setPressed(false)}
      onPointerOut={() => setPressed(false)}
      ref={meshRef}
      scale={spring.scale}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={colorValue} />
    </animated.mesh>
  );
}
