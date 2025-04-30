import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { useAuthStore } from "../../store/authStore";
import Button from "../../components/shared/Button";
import Input from "../../components/shared/Input";
import tw from "../../utils/tailwind";

type RootStackParamList = {
  Login: undefined;
};

const SignUpScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { signup, isLoading, error } = useAuthStore();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={tw`flex-1 justify-center items-center px-6`}>
      <Text style={tw`text-white text-3xl font-bold mb-6`}>Sign Up</Text>

      <Input
        placeholder="Name"
        value={name}
        onChangeText={setName}
        className="mb-4"
      />
      <Input
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        className="mb-4"
      />
      <Input
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        className="mb-4"
      />

      {error && <Text style={tw`text-red-500 mb-4`}>{error}</Text>}

      <Button
        title={isLoading ? "Signing Up..." : "Sign Up"}
        onPress={() => signup(email, password, name)}
        disable={isLoading}
      />

      <Button
        title="Back to Login"
        onPress={() => navigation.navigate("Login")}
        // className="mt-4 bg-gray-800"
        // textClassName="text-white"
      />
    </View>
  );
};

export default SignUpScreen;
