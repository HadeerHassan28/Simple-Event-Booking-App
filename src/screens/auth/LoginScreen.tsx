import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import tw from "../../utils/tailwind";
import Input from "../../components/shared/Input";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useAuthStore } from "../../store/authStore";
import Button from "../../components/shared/Button";

type RootStackParamList = {
  Signup: undefined;
  Dashboard: undefined;
};

const LoginScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { login, isLoading, error } = useAuthStore();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  console.log("LoginScreen", name, password);

  return (
    <View style={tw`flex-1 items-center justify-center bg-background px-6`}>
      <Text style={tw`text-text text-6xl mb-7`}>Login</Text>

      <View style={tw`w-full flex gap-7`}>
        {/* email */}

        <View style={tw`w-full flex gap-2`}>
          <Text style={tw`text-text text-lg `}>Name</Text>

          <Input
            placeholder="Name"
            value={name}
            onChangeText={setName}
            className="mb-4 w-full p-4 rounded-xl bg-surface text-text border border-primary h-20"
          />
        </View>

        {/* password */}
        <View style={tw`w-full flex gap-2`}>
          <Text style={tw`text-text text-lg `}>Password</Text>

          <Input
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            className="mb-4 w-full p-4 rounded-xl bg-surface text-text border border-primary h-20"
            secureTextEntry
          />
        </View>
      </View>

      {/* Error msg  */}
      {error && <Text style={tw`text-red-500 mb-4 text-lg`}>{error}</Text>}

      {/* submit button */}

      <View style={tw`w-full flex gap-4 mt-8`}>
        <Button
          title={isLoading ? "Logging in..." : "Login"}
          onPress={async () => {
            const user: any = await login(name, password);
            console.log("LoginScreen", user);

            if (user) {
              navigation.navigate("Dashboard");
            }
          }}
          disable={isLoading}
        />

        <Button
          title="Sign Up"
          onPress={() => navigation.navigate("Signup")}
          // className="mt-4 bg-gray-800"
          // textClassName="text-white"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default LoginScreen;
