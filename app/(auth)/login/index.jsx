import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Link, router } from "expo-router";
import { colorsDefault } from "../../../constants/Colors";
import FormInput from "@/components/FormInput";
import ButtonPrimary from "@/components/ButtonPrimary";
import { useSignInMutation } from "@/services/authServices";
import CustomModal from "@/components/CustomModal";

const index = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [
    triggerSignIn,
    { isSuccess: isSuccessSignIn, isLoading, isError, error },
  ] = useSignInMutation();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (key, value) => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  useEffect(() => {
    if (isError) {
      setModalVisible(!isModalVisible);
    } else if (isSuccessSignIn) {
      router.push("/(tabs)/explore");
    }
  }, [isError, isLoading, isSuccessSignIn, error]);

  const handleSubmit = async () => {
    if (!formData.email || !formData.password) {
      alert("Email and password are required");
      return;
    }

    try {
      await triggerSignIn({
        email: formData.email,
        password: formData.password,
        returnSecureToken: true,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={{ width: "100%", paddingHorizontal: 30 }}>
      <View style={{ marginTop: 30 }}>
        <FormInput
          label="E-mail"
          color={colorsDefault.brown.default}
          icon={require("../../../assets/images/userlog.png")}
          onChangeValue={(value) => {
            handleChange("email", value);
          }}
        />
        <FormInput
          label="Password"
          color={colorsDefault.brown.default}
          icon={require("../../../assets/images/lock.png")}
          additionalText="Forgot password?"
          onChangeValue={(value) => handleChange("password", value)}
          secureTextEntry
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
          handlePress={() => {
            handleSubmit();
          }}
          disabled={isLoading}
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
      <CustomModal
        isModalVisible={isModalVisible}
        setModalVisible={setModalVisible}
        isSuccessSignIn={isSuccessSignIn}
      />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
