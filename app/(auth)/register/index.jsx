import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { colorsDefault } from "../../../constants/Colors";
import FormInput from "@/components/FormInput";
import ButtonPrimary from "@/components/ButtonPrimary";
import { Link, router } from "expo-router";
import { useSignUpMutation } from "@/services/authServices";
import CustomModal from "@/components/CustomModal";

const Register = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [
    triggerSignUp,
    { isError, error, isLoading, isSuccess: isSuccessSignUp },
  ] = useSignUpMutation();

  useEffect(() => {
    if (isSuccessSignUp) {
      setModalVisible(!isModalVisible);
      router.push("/(tabs)/explore");
    }
  }, [isError, isLoading, isSuccessSignUp, error]);

  const handleChange = (key, value) => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  const handleSubmit = async () => {
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    if (!formData.email || !formData.password) {
      alert("Email and password are required");
      return;
    }

    try {
      await triggerSignUp({
        email: formData.email,
        password: formData.password,
        returnSecureToken: true,
      });

      if (isError) {
        if (error.data.error.message === "EMAIL_EXISTS")
          alert("User already exists");
        else alert(error.data.error.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={{ width: "100%", paddingHorizontal: 30 }}>
      <View>
        <FormInput
          label="Name"
          color={colorsDefault.brown.default}
          icon={require("../../../assets/images/userlog.png")}
          value={formData.name}
          onChangeValue={(value) => handleChange("name", value)}
        />
        <FormInput
          label="Lastname"
          color={colorsDefault.brown.default}
          icon={require("../../../assets/images/userlog.png")}
          value={formData.lastname}
          onChangeValue={(value) => handleChange("lastname", value)}
        />
        <FormInput
          label="E-mail"
          color={colorsDefault.brown.default}
          icon={require("../../../assets/images/mail.png")}
          value={formData.email}
          onChangeValue={(value) => handleChange("email", value)}
        />
        <FormInput
          label="Password"
          color={colorsDefault.brown.default}
          icon={require("../../../assets/images/lock.png")}
          value={formData.password}
          onChangeValue={(value) => handleChange("password", value)}
          secureTextEntry
        />
        <FormInput
          label="Confirm password"
          color={colorsDefault.brown.default}
          icon={require("../../../assets/images/lock.png")}
          value={formData.confirmPassword}
          onChangeValue={(value) => handleChange("confirmPassword", value)}
          secureTextEntry
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
          handlePress={handleSubmit}
          disabled={isLoading}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          marginTop: 20,
          alignItems: "center",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <View>
          <Text
            style={{
              color: colorsDefault.brown.default,
              fontSize: 16,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            Already have an account?
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
          <Link href="/login">
            <Text
              style={{
                fontSize: 16,
                fontWeight: 600,
                color: colorsDefault.brown.default,
                paddingBottom: 2,
              }}
            >
              Sign in
            </Text>
          </Link>
        </View>
      </View>
      <CustomModal
        isModalVisible={isModalVisible}
        setModalVisible={setModalVisible}
        isSuccessSignUp={isSuccessSignUp}
      />
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({});
