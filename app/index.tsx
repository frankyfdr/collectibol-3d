import { View, Text } from 'react-native';
import { router } from 'expo-router';
import { ButtonCTA } from '../src/Components/Button';
import { SafeAreaView } from 'react-native-safe-area-context';
const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 10 }}>
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
    </SafeAreaView>
  );
};
export default Home;
