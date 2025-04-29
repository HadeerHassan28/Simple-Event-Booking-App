import React from "react";
import { View, Text, StatusBar, SafeAreaView } from "react-native";
import Button from "../../components/shared/Button";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import tw from "../../utils/tailwind";

type RootStackParamList = {
  Login: undefined;
  Signup: undefined;
};

const StartScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <SafeAreaView style={tw`flex-1 bg-black`}>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <View style={tw`flex-1 justify-center items-center px-6 gap-6`}>
        <Text style={tw`text-white text-4xl font-bold mb-16`}>Welcome</Text>

        <Button title="Login" onPress={() => navigation.navigate("Login")} />
        <Button title="Sign Up" onPress={() => navigation.navigate("Signup")} />
      </View>
    </SafeAreaView>
  );
};

export default StartScreen;
