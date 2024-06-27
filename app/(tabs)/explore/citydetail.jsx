import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TextInput,
  ScrollView,
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import fakeCountries from "../../../data/fakeCountries.json";
import { colorsDefault } from "@/constants/Colors";
import RangeSliderCustom from "@/components/RangeSliderCustom";
import FilterCard from "@/components/FilterCard";

const CityDetail = () => {
  const { id } = useLocalSearchParams();
  const [selectedTravelersId, setSelectedTravelersId] = useState(null);
  const [selectedTravelersCompany, setSelectedTravelersCompany] = useState("");

  const [minAge, setMinAge] = useState(1);
  const [maxAge, setMaxAge] = useState(1);

  const selectedCity = fakeCountries.travelItineraries.flatMap((country) =>
    country.itinerary.filter((item) => item.city === id)
  );

  const [{ city, cityImage }] = selectedCity;

  const imageMap = {
    solo_user: require("../../../assets/images/solo_user.png"),
    couple_user: require("../../../assets/images/couple_user.png"),
    family_user: require("../../../assets/images/family_user.png"),
    friends_user: require("../../../assets/images/friends_user.png"),
  };

  const userTypes = ["solo_user", "couple_user", "family_user", "friends_user"];

  const handlePress = (index, el) => {
    setSelectedTravelersId(index === selectedTravelersId ? null : index);
    setSelectedTravelersCompany(index === selectedTravelersId ? null : el);
  };

  return (
    <View style={styles.container}>
      <View style={{ height: "100%", position: "relative" }}>
        <View style={styles.imgContainer}>
          <Image style={styles.imgHome} source={{ uri: cityImage }} />
          <View style={styles.cityTagContainer}>
            <Text style={styles.cityTag}>{city}</Text>
          </View>
        </View>
        <ScrollView style={styles.filterOptionsContainer}>
          <View>
            <Text
              style={{
                textAlign: "center",
                paddingTop: 20,
                fontSize: 20,
                color: colorsDefault.brown.default,
              }}
            >
              Create my ideal itinerary
            </Text>
            <RangeSliderCustom />
            <FilterCard>
              <Text style={styles.mainText}>Traveling with</Text>
              <View
                style={{
                  flexDirection: "row",
                  marginTop: 20,
                  justifyContent: "space-around",
                  width: "100%",
                }}
              >
                {userTypes.map((el, index) => (
                  <Pressable
                    key={index}
                    onPress={() => handlePress(index, el)}
                    style={{
                      borderRadius: 8,
                      overflow: "hidden",
                    }}
                  >
                    <View
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor:
                          index === selectedTravelersId
                            ? "#74AD8C"
                            : "transparent",
                        paddingVertical: 10,
                        paddingHorizontal: 16,
                      }}
                    >
                      <Image
                        source={imageMap[el]}
                        style={index === 0 ? styles.iconSolo : styles.icon}
                        resizeMode="contain"
                      />
                      <Text>{el.replace("_user", "").replace("_", " ")}</Text>
                    </View>
                  </Pressable>
                ))}
              </View>
            </FilterCard>
            <FilterCard>
              <View>
                <Text style={styles.mainText}>Age range</Text>
                <View style={styles.ageRangeContainer}>
                  <Text style={{ fontSize: 16 }}>From</Text>
                  <Pressable
                    onPress={() => {
                      setMinAge(minAge > 1 ? minAge - 1 : 1);
                    }}
                  >
                    <Text>-</Text>
                  </Pressable>
                  <TextInput
                    style={styles.inputAgeRange}
                    keyboardType="numeric"
                    value={minAge.toString()}
                  />
                  <Pressable onPress={() => setMinAge(minAge + 1)}>
                    <Text>+</Text>
                  </Pressable>
                </View>
                <View style={styles.ageRangeContainer}>
                  <Text style={{ fontSize: 16, paddingRight: 20 }}>To</Text>
                  <Pressable
                    onPress={() =>
                      setMaxAge(maxAge && maxAge > 1 ? maxAge - 1 : 1)
                    }
                  >
                    <Text>-</Text>
                  </Pressable>
                  <TextInput
                    style={styles.inputAgeRange}
                    keyboardType="numeric"
                    value={maxAge.toString() ?? 1}
                  />
                  <Pressable onPress={() => setMaxAge(maxAge ? maxAge + 1 : 1)}>
                    <Text>+</Text>
                  </Pressable>
                </View>
              </View>
            </FilterCard>
          </View>
        </ScrollView>
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
    fontWeight: "700",
  },
  cityTagContainer: {
    position: "absolute",
    zIndex: 20,
    bottom: 90,
    paddingLeft: 50,
    backgroundColor: "rgba(194, 172, 147, 0.8)",
    width: "50%",
    left: 0,
    paddingVertical: 5,
  },
  mainText: {
    fontSize: 18,
  },
  icon: {
    width: 55,
    height: 30,
  },
  iconSolo: {
    width: 35,
    height: 31,
  },
  ageRangeContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    justifyContent: "center",
    gap: 10,
  },
  inputAgeRange: {
    height: 30,
    backgroundColor: colorsDefault.secondary,
    width: 50,
    borderRadius: 10,
    textAlign: "center",
    marginLeft: 10,
    marginRight: 10,
  },
});
