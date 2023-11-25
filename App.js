import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './components/Main';
import Fullscreen from './components/Fullscreen';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Main" options={{headerTitleStyle: {fontWeight: 'bold'}}}>
          <Stack.Screen name="Main" component={Main}/>
          <Stack.Screen name="Fullscreen" component={Fullscreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
}