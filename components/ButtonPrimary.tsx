import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colorsDefault } from "../constants/Colors";

const ButtonPrimary = ({
  title,
  handlePress,
}: {
  title: string;
  handlePress: () => void;
}) => {
  return (
    <Pressable
      style={{
        backgroundColor: colorsDefault.green.primary,
        borderRadius: 10,
        width: "75%",
      }}
      onPress={handlePress}
    >
      <Text
        style={{
          textAlign: "center",
          color: colorsDefault.secondary,
          paddingVertical: 15,
          fontSize: 18,
        }}
      >
        {title}
      </Text>
    </Pressable>
  );
};

export default ButtonPrimary;

const styles = StyleSheet.create({});
