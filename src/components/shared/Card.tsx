import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  GestureResponderEvent,
  Pressable,
} from "react-native";
import tw from "../../utils/tailwind";
import { Event } from "../../types/events";
import { useNavigation } from "@react-navigation/native";
import { useAuthStore } from "../../store/authStore";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../screens/events/EventListScreen";

interface CardProps {
  data: Event;
  onPress?: (event: GestureResponderEvent) => void;
  singlePage?: boolean;
}

const Card: React.FC<CardProps> = ({ data, onPress, singlePage }) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { getUserEvents, user } = useAuthStore();
  const handleRegister = async () => {
    if (user) {
      const response = await getUserEvents(user, data);

      if (response !== undefined && response !== null)
        navigation.navigate("EventList");
    }
  };
  return (
    <TouchableOpacity
      style={tw`bg-text rounded-lg shadow-md p-2 my-2 mx-1 w-2/3 flex flex-col text-background gap-3 `}
      onPressIn={!singlePage ? (event) => onPress?.(event) : undefined}
    >
      {/* name */}
      <Text style={tw` text-xl`}>{data.name}</Text>

      {/* location */}
      <Text style={tw`text-sm text-gray-800`}>{data.location}</Text>
      {/* Image */}
      <Image
        source={{ uri: data.image }}
        style={[tw`w-full rounded-lg mb-4`, singlePage ? tw`h-1/3` : tw`h-15`]}
      />
      {/* Date + Price */}
      <View style={tw`flex flex-row justify-between`}>
        <Text style={tw`text-sm text-gray-500`}>
          {data.time.toLocaleString()}
        </Text>

        <Text style={tw`text-sm text-gray-500`}>
          {data.price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </Text>
      </View>
      {/* Speakers */}
      {singlePage && (
        <Text style={tw`text-sm text-background`}>
          Speakers: {data.speakers}
        </Text>
      )}

      {/* Capacity */}
      {singlePage && (
        <Text style={tw`text-sm text-background`}>
          Capacity: {data.capacity}
        </Text>
      )}

      {/* Available Spots */}
      {singlePage && (
        <Text style={tw`text-sm text-background`}>
          Available Spots: {data.spots}
        </Text>
      )}

      {/* Regeter btn */}
      {singlePage && (
        <TouchableOpacity
          style={tw`bg-primary rounded-lg p-2`}
          onPress={handleRegister}
        >
          <Text style={tw`text-text text-center`}>Register</Text>
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
};

export default Card;
