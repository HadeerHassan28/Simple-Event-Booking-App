import React from "react";
import { StyleSheet, View, Text } from "react-native";
import tw from "../../utils/tailwind";
import { useAuthStore } from "../../store/authStore";
import Card from "../../components/shared/Card";
import { Event } from "../../types/events";
import Button from "../../components/shared/Button";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../events/EventListScreen";

const DashboardScreen = () => {
  const user = useAuthStore((state) => state.user);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={tw`flex-1 items-center justify-start bg-background `}>
      <Text style={tw`text-2xl font-bold text-primary p-5`}>
        Welcome to the Dashboard
      </Text>
      {/* Events */}
      <View style={tw`w-full items-center justify-center flex gap-6`}>
        {user?.event?.length ? (
          <View style={tw`  w-full`}>
            {user?.event.map((event: any) => (
              <View
                key={event.id}
                style={tw`p-4 bg-background rounded-lg shadow-md w-full`}
              >
                <Card data={event} />
              </View>
            ))}
          </View>
        ) : (
          <View style={tw` items-center justify-center flex gap-6`}>
            <Text style={tw`text-xl text-text text-center mt-6`}>
              There is no event
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default DashboardScreen;
