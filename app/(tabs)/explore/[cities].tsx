import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import { useLocalSearchParams } from "expo-router";
import fakeCountries from "../../../data/fakeCountries.json";
import FormInput from "@/components/FormInput";
import { colorsDefault } from "@/constants/Colors";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import CustomCarousel from "@/components/MyCarousel";
import CityAttractions from "@/components/CityAttractions";
import citiesItineraries from "../../../data/citiesIntineraries.json";
import countries from "../../../data/countries.json";

const CityPage = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { id } = useLocalSearchParams();
  const idString = Array.isArray(id) ? id[0] : id;
  const countryId = idString ? parseInt(idString) : null;

  const countryData =
    countryId !== null
      ? countries.find((country) => country.id === countryId)
      : null;

  const citiesFilteredById =
    countryId !== null
      ? citiesItineraries.filter((city) => city.countryId === countryId)
      : [];

  const citiesOptions = citiesFilteredById.map(({ city, cityImage }) => ({
    city,
    cityImage,
  }));

  const cityActivities = citiesFilteredById.flatMap((city) => {
    return city.activities.flatMap((activity) => activity.type);
  });
  const cityInfo = [...new Set(cityActivities)];

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View>
          <Image
            style={styles.image}
            source={{ uri: countryData?.countryImage }}
          />
          <Text style={styles.countryText}>{countryData?.country}</Text>
        </View>
        <View style={styles.formInputContainer}>
          <FormInput
            color={colorsDefault.brown.default}
            onChangeValue={setSearchTerm}
            icon={<TabBarIcon name="search" size={24} />}
            placeholder="Search a city..."
          />
        </View>
        <CustomCarousel citiesOptions={citiesOptions} searchTerm={searchTerm} />
        <CityAttractions cityInfo={cityInfo} />
      </View>
    </SafeAreaView>
  );
};

export default CityPage;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 30,
    alignItems: "center",
  },
  image: {
    height: 200,
    width: 300,
    borderRadius: 12,
  },
  countryText: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 20,
  },
  formInputContainer: {
    width: "100%",
  },
});
