import React from "react";
import { StyleSheet, Text, View, TextInput, Image } from "react-native";
import { colorsDefault } from "@/constants/Colors";

const FormInput = ({
  label,
  color,
  icon,
  additionalText,
  onChangeValue,
  ...rest
}) => {
  const renderIcon = () => {
    if (React.isValidElement(icon)) {
      return <View style={{ position: "absolute", top: 17 }}>{icon}</View>;
    } else if (
      typeof icon === "number" ||
      (typeof icon === "object" && icon !== null)
    ) {
      return (
        <Image
          style={{
            position: "absolute",
            top: 17,
            height: additionalText === "emailIcon" ? 17 : 22,
            width: additionalText === "emailIcon" ? 23 : 18,
          }}
          source={icon}
        />
      );
    }
    return null;
  };

  return (
    <View style={styles.containerFormInput}>
      <Text style={{ color, fontSize: 18 }}>{label}</Text>
      <View style={{ position: "relative" }}>
        <TextInput
          style={[
            styles.textInputField,
            { paddingTop: additionalText === "emailIcon" ? 6 : 13 },
          ]}
          onChangeText={onChangeValue}
          {...rest}
        />
        {renderIcon()}
        {additionalText && additionalText != "emailIcon" && (
          <Text style={{ textAlign: "right", paddingTop: 5, color }}>
            {additionalText}
          </Text>
        )}
      </View>
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  containerFormInput: {
    marginTop: 15,
  },
  textInputField: {
    height: 47,
    borderBottomWidth: 1,
    borderColor: colorsDefault.brown.default,
    paddingLeft: 30,
  },
});
