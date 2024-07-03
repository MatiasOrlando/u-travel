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
import { colorsDefault } from "@/constants/Colors";

const Profile = () => {
  const [image, setImage] = useState(null);
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
      {image ? null : (
        <>
          <Image
            style={styles.profileImg}
            resizeMode="cover"
            source={{
              uri: "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png",
            }}
          />
          <Pressable
            style={({ pressed }) => [
              styles.addImageBtn,
              {
                opacity: pressed ? 0.6 : 1,
              },
            ]}
          >
            <Text style={styles.addImgText}>Add profile picture</Text>
          </Pressable>
        </>
      )}
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  profileImg: {
    height: 200,
    width: 200,
  },
  addImageBtn: {
    backgroundColor: colorsDefault.green.primary,
    height: 50,
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    borderRadius: 10,
  },
  addImgText: {
    color: "white",
  },
});
