import { Ionicons } from "@expo/vector-icons";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { View, Pressable } from "react-native";
import tw from "../../utils/tailwind";
import Card from "../../components/shared/Card";

// Define the type for the params
type RootStackParamList = {
  EventList: undefined;
  EventDetails: { event: any };
};

const EventDetailScreen = () => {
  const navigation = useNavigation();

  // get the event id from the route params
  const route = useRoute<RouteProp<RootStackParamList, "EventDetails">>();
  const { event } = route.params;

  return (
    <View style={tw`flex-1 bg-background p-4`}>
      {/* Back btn */}
      <Pressable onPress={() => navigation.goBack()} style={tw`mb-4`}>
        <Ionicons name="arrow-back" size={24} color="#4F46E5" />
      </Pressable>

      {/* Card */}
      <View style={tw`flex-1 justify-center items-center h-full w-full`}>
        <Card data={event} singlePage={true} />
      </View>
    </View>
  );
};

export default EventDetailScreen;
