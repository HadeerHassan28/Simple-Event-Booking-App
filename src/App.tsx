import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./navigation/AppNavigator";
import { SafeAreaView, StatusBar } from "react-native";
import tw from "./utils/tailwind";
import { useAuthStore } from "./store/authStore";

const queryClient = new QueryClient();

export default function App() {
  const { user } = useAuthStore();
  return (
    <SafeAreaView style={tw`flex-1 bg-black`}>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </QueryClientProvider>
    </SafeAreaView>
  );
}
