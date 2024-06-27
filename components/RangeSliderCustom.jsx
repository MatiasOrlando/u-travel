import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Slider from "@react-native-community/slider";
import { colorsDefault } from "@/constants/Colors";
import FilterCard from "./FilterCard";

const RangeSliderCustom = () => {
  const [slider, setSliderValue] = useState(500);
  return (
    <FilterCard>
      <Text style={styles.mainText}>My Budget</Text>
      <View style={styles.rangeContainer}>
        <Slider
          style={{
            width: 250,
            height: 40,
            marginTop: 10,
            marginHorizontal: "auto",
          }}
          minimumValue={500}
          maximumValue={3000}
          value={slider}
          step={100}
          onValueChange={(value) => setSliderValue(value)}
        />
        <Text style={styles.priceRange}>{`$500 - $${slider}`}</Text>
      </View>
    </FilterCard>
  );
};

export default RangeSliderCustom;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginHorizontal: 20,
    padding: 15,
    backgroundColor: colorsDefault.gray.default,
    borderRadius: 10,
  },
  rangeContainer: {},
  mainText: {
    fontSize: 18,
  },
  priceRange: {
    fontSize: 16,
  },
});
