import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  GestureResponderEvent,
} from "react-native";
import tw from "../../utils/tailwind";
import { Event } from "../../types/events";

interface CardProps {
  data: Event;
  onPress: (event: GestureResponderEvent) => void;
}

const Card: React.FC<CardProps> = ({ data, onPress }) => {
  return (
    <TouchableOpacity
      style={tw`bg-text rounded-lg shadow-md p-4 m-2 w-2/3 flex flex-col text-background gap-3`}
      onPress={onPress}
    >
      <Text style={tw`text-bold text-xl`}>{data.name}</Text>

      <Text style={tw`text-sm text-gray-800`}>{data.location}</Text>
      <Image
        source={{ uri: data.image }}
        style={tw`w-full h-15 rounded-lg mb-4`}
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
    </TouchableOpacity>
  );
};

export default Card;
