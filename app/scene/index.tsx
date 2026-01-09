import { View, Text } from 'react-native';
import SceneScreen from '../../src/Screens/SceneScreen';
const Scene = () => {
  return (
    <View style={{ flex: 1, alignContent: 'center', justifyContent: 'center', width: '80%', alignSelf: 'center' }}>
      <SceneScreen />
    </View>
  );
};

export default Scene;
