import React from "react";
import { TextInput, TextInputProps } from "react-native";
import tw from "../../utils/tailwind";

interface InputProps extends TextInputProps {
  className?: string;
}
const Input: React.FC<InputProps> = ({ className, ...props }) => {
  return (
    <TextInput
      style={tw`${
        className ||
        "w-full p-4 rounded-xl bg-surface text-text border border-primary h-20"
      }`}
      placeholderTextColor="#A1A1AA"
      {...props}
    />
  );
};

export default Input;
