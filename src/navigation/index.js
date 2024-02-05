import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  HomeScreen,
  Login,
  ScreensName,
  OtpVerification,
  Search,
  OrderList,
} from '../screens';

const Stack = createNativeStackNavigator();

export function NavigationWrapper() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={ScreensName.OtpVerification}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name={ScreensName.Home} component={HomeScreen} />
        <Stack.Screen name={ScreensName.Login} component={Login} />
        <Stack.Screen
          name={ScreensName.OtpVerification}
          component={OtpVerification}
        />
        <Stack.Screen name={ScreensName.Search} component={Search} />
        <Stack.Screen name={ScreensName.OrderList} component={OrderList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
