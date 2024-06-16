import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import fakeCountries from "../../data/fakeCountries.json";
import FormInput from "@/components/FormInput";
import { colorsDefault } from "@/constants/Colors";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import CardCountry from "@/components/CardCountry";

const explore = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const searchQuery = fakeCountries.travelItineraries.filter(
    (countryIntinerary) => countryIntinerary.country.includes(searchTerm)
  );

  return (
    <View
      style={{
        width: "100%",
        marginTop: 20,
        flex: 1,
        backgroundColor: "#EFEDEB",
      }}
    >
      <View style={{ paddingHorizontal: 20 }}>
        <View>
          <FormInput
            color={colorsDefault.brown.default}
            onChangeValue={setSearchTerm}
            icon={<TabBarIcon name="search" size={24} />}
          />
        </View>
        <View>
          <FlatList
            data={searchQuery}
            renderItem={({ item }) => <CardCountry {...item} />}
            keyExtractor={({ country }) => country}
            numColumns={2}
            columnWrapperStyle={{
              justifyContent: "space-between",
            }}
            contentContainerStyle={{ gap: 15, marginTop: 25 }}
          />
        </View>
      </View>
    </View>
  );
};

export default explore;

const styles = StyleSheet.create({});
