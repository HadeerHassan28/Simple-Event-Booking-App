import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/auth/LoginScreen";
import SignUpScreen from "../screens/auth/SignUpScreen";
import StartScreen from "../screens/auth/StartScreen";
import BottomTabs from "./BottomTabs";
import EventDetailScreen from "../screens/events/EventDetailScreen";
import { useAuthStore } from "../store/authStore";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const { user } = useAuthStore();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!user ? (
        <>
          <Stack.Screen name="Start" component={StartScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={SignUpScreen} />
        </>
      ) : (
        <>
          {/* Main app with Bottom Tabs */}
          <Stack.Screen name="Main" component={BottomTabs} />
          {/* Subscreens like EventDetails */}
          <Stack.Screen name="EventDetails" component={EventDetailScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default AppNavigator;
