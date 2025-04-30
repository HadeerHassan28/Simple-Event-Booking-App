import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  ScrollView,
  FlatList,
} from "react-native";
import { useEventsStore } from "../../store/eventStrore";

import Card from "../../components/shared/Card";
import tw from "../../utils/tailwind";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

const EventListScreen = () => {
  const navigation = useNavigation();
  const { events, isLoading, getEvent } = useEventsStore();
  console.log(events);

  useEffect(() => {
    getEvent();
  }, []);

  if (isLoading && events?.length === 0) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#4F46E5" />
      </View>
    );
  }

  return (
    <View style={tw`flex-1 bg-background flex gap-5`}>
      <Text style={tw`text-3xl text-text mx-5`}>Events</Text>

      <FlatList
        data={events}
        keyExtractor={(item: any) => item.id.toString()}
        renderItem={({ item }: any) => (
          <View style={tw`flex flex-col items-center`}>
            <Card data={item} />
          </View>
        )}
      />
    </View>
  );
};

export default EventListScreen;
