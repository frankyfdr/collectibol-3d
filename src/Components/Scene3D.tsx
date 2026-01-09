import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber/native';
import { OrbitControls } from '@react-three/drei/native';
import { useObjectsStore } from '../store';
import Box from './Objects';

export const Scene3D = () => {
  const objects = useObjectsStore((s) => s.objects);
  console.log('Rendering Scene3D with objects:', objects);
  const [color, setColor] = React.useState('red');
  return (
    <Canvas>
      <ambientLight intensity={Math.PI / 2} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      <OrbitControls />
      {objects.map((obj) => (
        <Box
          key={obj.id}
          position={obj.position}
          color={obj.color}
          size={obj.size}
          direction={obj.direction}
          velocity={obj.velocity}
          onClick={() => {
            console.log('Object selected:', obj);
          }}
        />
      ))}
    </Canvas>
  );
};
