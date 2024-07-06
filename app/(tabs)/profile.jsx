import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Platform,
  StatusBar,
} from "react-native";
import React, { useState, useEffect } from "react";
import ImageSelector from "@/components/ImageSelector";
import { useSelector } from "react-redux";

const Profile = () => {
  const { user } = useSelector((state) => state.auth.value);
  const [statusBarHeight, setStatusBarHeight] = useState(0);

  useEffect(() => {
    if (Platform.OS === "android" && StatusBar.currentHeight) {
      setStatusBarHeight(StatusBar.currentHeight);
    }
  }, []);

  return (
    <View
      style={[
        styles.container,
        { marginTop: Platform.OS === "ios" ? 80 : statusBarHeight || 200 },
      ]}
    >
      <View>
        <ImageSelector />
        {user && (
          <View style={{ marginTop: 30 }}>
            <Text>Username: {user.split("@")[0]}</Text>
            <Text>Email: {user}</Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});
