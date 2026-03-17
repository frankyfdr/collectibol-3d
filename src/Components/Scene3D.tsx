import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Canvas } from '@react-three/fiber/native';
import useControls from 'r3f-native-orbitcontrols';
import { PerspectiveCamera } from '@react-three/drei/native';
import { useObjectsStore } from '../store';
import Box from './Objects';

export const Scene3D = () => {
  const [OrbitControls, orbitEvents] = useControls();
  const objects = useObjectsStore((s) => s.objects);
  console.log('objects', objects);

  return (
    <View style={styles.container} {...orbitEvents}>
      <Canvas style={styles.container} frameloop="always">
        <PerspectiveCamera makeDefault position={[10, 10, 10]} />

        <ambientLight intensity={Math.PI / 2} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />

        <OrbitControls enablePan enableRotate enableZoom />

        {objects.map((obj) => (
          <Box key={obj.id} position={obj.position} color={obj.color} size={obj.size} direction={obj.direction} velocity={obj.velocity} />
        ))}
      </Canvas>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});
