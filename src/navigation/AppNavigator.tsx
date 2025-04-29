import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/auth/LoginScreen";
import SignUpScreen from "../screens/auth/SignUpScreen";
import EventListScreen from "../screens/events/EventListScreen";
import EventDetailScreen from "../screens/events/EventDetailScreen";
import DashboardScreen from "../screens/dashboard/DashboardScreen";
import StartScreen from "../screens/auth/StartScreen";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Start"
    >
      {/* auth */}
      <Stack.Screen name="Start" component={StartScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignUpScreen} />

      {/* main */}
      <Stack.Screen name="Events" component={EventListScreen} />
      <Stack.Screen name="EventDetails" component={EventDetailScreen} />
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
