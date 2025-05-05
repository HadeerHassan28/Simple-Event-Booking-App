import React from "react";
import { StyleSheet, View, Text } from "react-native";
import tw from "../../utils/tailwind";
import { useAuthStore } from "../../store/authStore";
import Card from "../../components/shared/Card";
import { Event } from "../../types/events";

const DashboardScreen = () => {
  const { user } = useAuthStore((state) => ({
    user: state.user,
    token: state.token,
    isLoading: state.isLoading,
    error: state.error,
  }));
  return (
    <View style={tw`flex-1 items-center justify-center bg-background`}>
      <Text style={tw`text-2xl font-bold text-primary`}>
        Welcome to the Dashboard
      </Text>
      <View>
        {user?.event ? (
          <View>
            {user.event.map((event: any) => (
              <View
                key={event.id}
                style={tw`p-4 bg-white rounded-lg shadow-md`}
              >
                <Card data={event} />
              </View>
            ))}
          </View>
        ) : (
          <View>
            <Text>There is no event </Text>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default DashboardScreen;
