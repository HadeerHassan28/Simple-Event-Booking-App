// components/Button.tsx
import React from "react";
import { Text, Pressable } from "react-native";
import tw from "../../utils/tailwind";

interface Props {
  title: string;
  onPress: () => void;
  style?: string;
}

export default function Button({ title, onPress, style = "" }: Props) {
  return (
    <Pressable style={[tw`bg-primary p-4 rounded-xl w-full`]} onPress={onPress}>
      <Text style={tw`text-white text-center font-semibold`}>{title}</Text>
    </Pressable>
  );
}
