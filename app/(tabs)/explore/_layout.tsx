import { StyleSheet, Pressable } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const _layout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="[cities]"
        options={{
          headerTitle: "City",
          headerTitleStyle: {
            fontSize: 0,
          },
          headerLeft: () => (
            <Pressable onPress={router.back}>
              <Ionicons name="arrow-back" size={24} color="black" />
            </Pressable>
          ),
          headerTransparent: true,
        }}
      />
    </Stack>
  );
};

export default _layout;

const styles = StyleSheet.create({});
