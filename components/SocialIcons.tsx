import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const SocialIcons = () => {
  return (
    <View style={{ alignItems: "center", marginTop: 60 }}>
      <Text style={{ fontSize: 18 }}>Join us</Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 40,
          marginTop: 30,
        }}
      >
        <View
          style={[styles.socialIconContainer, { backgroundColor: "black" }]}
        >
          <Image
            style={styles.imageIcon}
            source={require("../assets/images/Apple.png")}
          />
        </View>
        <View
          style={[styles.socialIconContainer, { backgroundColor: "#3B5998" }]}
        >
          <Image
            style={styles.imageIcon}
            source={require("../assets/images/Facebook.png")}
          />
        </View>

        <View
          style={[styles.socialIconContainer, { backgroundColor: "#FF6868" }]}
        >
          <Image
            style={styles.imageIcon}
            source={require("../assets/images/google.png")}
          />
        </View>
      </View>
    </View>
  );
};

export default SocialIcons;

const styles = StyleSheet.create({
  socialIconContainer: {
    padding: 15,
    borderRadius: 8,
  },
  imageIcon: {
    height: 22,
    width: 20,
  },
});
