import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import fakeCountries from "../../../data/fakeCountries.json";
import { colorsDefault } from "@/constants/Colors";
import RangeSliderCustom from "@/components/RangeSliderCustom";

const CityDetail = () => {
  const { id } = useLocalSearchParams();

  const selectedCity = fakeCountries.travelItineraries.flatMap((country) =>
    country.itinerary.filter((item) => item.city === id)
  );

  const [{ city, cityImage, activities }] = selectedCity;

  // console.log(activities);

  return (
    <View style={styles.container}>
      <View
        style={{ backgroundColor: "red", height: "100%", position: "relative" }}
      >
        <View style={styles.imgContainer}>
          <Image style={styles.imgHome} source={{ uri: cityImage }} />
          <View style={styles.cityTagContainer}>
            <Text style={styles.cityTag}>{city}</Text>
          </View>
        </View>
        <View style={styles.filterOptionsContainer}>
          <View>
            <RangeSliderCustom />
          </View>
        </View>
      </View>
    </View>
  );
};

export default CityDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgContainer: {
    alignItems: "center",
    width: "100%",
    position: "relative",
  },
  imgHome: {
    height: 250,
    width: "100%",
  },
  filterOptionsContainer: {
    position: "absolute",
    top: 200,
    left: 0,
    right: 0,
    backgroundColor: "white",
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    height: "100%",
  },
  cityTag: {
    color: colorsDefault.secondary,
    fontSize: 22,
    opacity: 1,
    fontWeight: 700,
  },
  cityTagContainer: {
    position: "absolute",
    zIndex: 20,
    bottom: 90,
    paddingLeft: 50,
    backgroundColor: "rgba(194, 172, 147, 0.8)",
    width: "40%",
    left: 0,
    paddingVertical: 5,
  },
});
