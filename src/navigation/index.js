import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen, Login, ScreensName, SignUp} from '../screens';

const Stack = createNativeStackNavigator();

export function NavigationWrapper() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={ScreensName.Home} component={HomeScreen} />
        <Stack.Screen name={ScreensName.Login} component={Login} />
        <Stack.Screen name={ScreensName.SignUp} component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
