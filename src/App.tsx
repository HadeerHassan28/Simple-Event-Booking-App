import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./navigation/AppNavigator";
import { Pressable, SafeAreaView, StatusBar } from "react-native";
import tw from "./utils/tailwind";
import { useAuthStore } from "./store/authStore";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";

export default function App() {
  const { user, logout } = useAuthStore();
  return (
    <SafeAreaView style={tw`flex-1 bg-black`}>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      {user && (
        <Pressable
          style={tw`absolute bottom-20 right-0 p-4 z-10 bg-red-500 rounded-full`}
          onPress={() => {
            logout();
          }}
        >
          <SimpleLineIcons name="logout" size={24} color={"white"} />
        </Pressable>
      )}
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
}
