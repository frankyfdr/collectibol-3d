import { View, Text } from 'react-native';
import { router } from 'expo-router';
import { ButtonCTA } from '../src/Components/Button';
const Home = () => {
  return (
    <View>
      <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginVertical: 20 }}>Home Screen</Text>
      <Text style={{ fontSize: 16, textAlign: 'center', marginBottom: 20 }}>
        Welcome to the 3D Object Scene App! Click the button below to navigate to the 3D scene.
      </Text>
      <ButtonCTA
        title="Go to Scene"
        onPress={() => {
          router.push('/scene');
        }}
      />
    </View>
  );
};
export default Home;
