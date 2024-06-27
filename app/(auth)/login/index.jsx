import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link, router } from "expo-router";
import { colorsDefault } from "../../../constants/Colors";
import FormInput from "@components/FormInput";
import ButtonPrimary from "@components/ButtonPrimary";

const index = () => {
  return (
    <View style={{ width: "100%", paddingHorizontal: 30 }}>
      <View style={{ marginTop: 30 }}>
        <FormInput
          label="E-mail"
          color={colorsDefault.brown.default}
          icon={require("../../../assets/images/userlog.png")}
        />
        <FormInput
          label="Password"
          color={colorsDefault.brown.default}
          icon={require("../../../assets/images/lock.png")}
          additionalText="Forgot password?"
        />
      </View>
      <View
        style={{
          marginTop: 50,
          alignItems: "center",
        }}
      >
        <ButtonPrimary
          title="Sign In"
          handlePress={() => router.push("/(tabs)")}
        />
      </View>
      <View
        style={{
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 50,
        }}
      >
        <View>
          <Text style={{ color: colorsDefault.brown.default, fontSize: 16 }}>
            Don't have an account?
          </Text>
        </View>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: colorsDefault.brown.default,
            marginLeft: 3,
            marginTop: 2,
          }}
        >
          <Link href="/register">
            <Text
              style={{
                fontSize: 16,
                fontWeight: 600,
                color: colorsDefault.brown.default,
                paddingBottom: 2,
              }}
            >
              Sign up
            </Text>
          </Link>
        </View>
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  socialIconContainer: {
    padding: 15,
    borderRadius: 4,
  },
  imageIcon: {
    height: 22,
    width: 18,
  },
});
