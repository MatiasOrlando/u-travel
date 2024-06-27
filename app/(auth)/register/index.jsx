import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colorsDefault } from "../../../constants/Colors";
import FormInput from "@/components/FormInput";
import ButtonPrimary from "@/components/ButtonPrimary";
import { Link, router } from "expo-router";

const Register = () => {
  return (
    <View style={{ width: "100%", paddingHorizontal: 30 }}>
      {/* <Text style={{ color: colorsDefault.brown.default, fontSize: 16 }}>
        <Link href="/login">
          <Text
            style={{
              fontWeight: 600,
              color: colorsDefault.brown.default,
              fontSize: 16,
              textDecorationLine: "underline",
            }}
          >
            Fill your details
          </Text>
        </Link>
      </Text> */}
      <View>
        <FormInput
          label="Name"
          color={colorsDefault.brown.default}
          icon={require("../../../assets/images/userlog.png")}
        />
        <FormInput
          label="Lastname"
          color={colorsDefault.brown.default}
          icon={require("../../../assets/images/userlog.png")}
        />
        <FormInput
          label="E-mail"
          color={colorsDefault.brown.default}
          icon={require("../../../assets/images/mail.png")}
          additionalText="emailIcon"
        />
        <FormInput
          label="Password"
          color={colorsDefault.brown.default}
          icon={require("../../../assets/images/lock.png")}
        />
        <FormInput
          label="Confirm password"
          color={colorsDefault.brown.default}
          icon={require("../../../assets/images/lock.png")}
        />
      </View>
      <View
        style={{
          marginTop: 25,
          alignItems: "center",
        }}
      >
        <ButtonPrimary
          title="Sign Up"
          handlePress={() => router.push("/(tabs)")}
        />
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({});
