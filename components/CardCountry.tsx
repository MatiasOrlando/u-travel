import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { CountryItinerary } from "@/data/types";
import { colorsDefault } from "@/constants/Colors";

const CardCountry: React.FC<CountryItinerary> = ({ country, countryImage }) => {
  return (
    <View style={{ position: "relative" }}>
      <Text
        style={{
          position: "absolute",
          bottom: 15,
          backgroundColor: "#C2AC93C9",
          fontSize: 20,
          width: "100%",
          zIndex: 50,
          paddingLeft: 10,
          color: colorsDefault.secondary,
        }}
      >
        {country}
      </Text>
      <Image
        style={{ height: 185, width: 185, borderRadius: 12 }}
        source={{ uri: countryImage }}
        resizeMode="cover"
      />
    </View>
  );
};

export default CardCountry;

const styles = StyleSheet.create({});
