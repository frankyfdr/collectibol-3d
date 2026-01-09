import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { ButtonCTA } from '../Components/Button';
import { Scene3D } from '../Components/Scene3D';
import { useObjectsStore } from '../store';
import { randomColor, randomDirection, randomPosition, randomSize, randomString, randomVelocity } from '../../utils/random';
const SceneScreen = () => {
  const addObject = useObjectsStore((s) => s.addObject);
  const clearObjects = useObjectsStore((s) => s.clearObjects);
  return (
    <View>
      <View>
        <Text style={styles.infoText}>Press, hold and drag to move the camera</Text>
      </View>
      <View style={styles.sceneContainer}>
        <Scene3D />
      </View>

      <ButtonCTA
        title="Spawn Object"
        onPress={() =>
          addObject({
            id: randomString(),
            color: randomColor(),
            size: randomSize(),
            position: randomPosition(),
            direction: randomDirection(),
            velocity: randomVelocity(),
          })
        }
      />
      <ButtonCTA variant="secondary" title="Clear" onPress={() => clearObjects()} />
    </View>
  );
};

export default SceneScreen;
const styles = StyleSheet.create({
  infoText: {
    marginBottom: 10,
    textAlign: 'center',
    color: '#484948',
  },
  sceneContainer: {
    borderColor: '#A5D6A7',
    backgroundColor: '#e0e4e0',
    borderWidth: 2,
    borderRadius: 10,
    width: 370,
    marginBottom: 20,
    height: 300,
  },
});
