import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { colorsDefault } from "@/constants/Colors";
import { useDispatch, useSelector } from "react-redux";
import {
  useGetProfileImageQuery,
  usePostProfileImageMutation,
} from "@/services/shopServices";
import { setCameraImage } from "@/features/Auth/AuthSlice";
import ButtonPrimary from "./ButtonPrimary";

const ImageSelector = () => {
  const [image, setImage] = useState(null);
  const [confirmedImage, setConfirmedImage] = useState(false);
  const [initialLayout, setInitialLayout] = useState(true);
  const [triggerPostImage, result] = usePostProfileImageMutation();
  const dispatch = useDispatch();
  const { localId } = useSelector((state) => state.auth.value);
  const {
    data: imageProfile,
    isLoading,
    isSuccess,
  } = useGetProfileImageQuery(localId);

  useEffect(() => {
    if (!isLoading && imageProfile) {
      setImage(imageProfile.image || null);
    }
  }, [imageProfile, isLoading, isSuccess]);

  const verifyCameraPermisson = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (!status) {
      return false;
    }
    return true;
  };

  const pickImage = async () => {
    setConfirmedImage(false);
    const isCameraOk = await verifyCameraPermisson();
    if (isCameraOk) {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [1, 1],
        base64: true,
        quality: 0.2,
      });

      if (!result.canceled) {
        setImage(`data:image/jpeg;base64,${result.assets[0].base64}`);
        setInitialLayout(false);
      } else {
        setInitialLayout(true);
      }
    }
  };

  const confirmImage = async () => {
    setConfirmedImage(true);
    try {
      dispatch(setCameraImage(image));
      await triggerPostImage({ image, localId });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      {image && !confirmedImage && !initialLayout ? (
        <>
          <Image
            style={styles.profileImg}
            resizeMode="cover"
            source={{ uri: image }}
          />
          <Pressable
            onPress={pickImage}
            style={({ pressed }) => [
              styles.addImageBtn,
              {
                opacity: pressed ? 0.6 : 1,
              },
            ]}
          >
            <Text style={{ color: "#fff" }}>Take new Photo</Text>
          </Pressable>
          <Pressable
            style={({ pressed }) => [
              styles.addImageBtn,
              {
                opacity: pressed ? 0.6 : 1,
              },
            ]}
            onPress={confirmImage}
          >
            <Text style={{ color: "#fff" }}>Confirm photo</Text>
          </Pressable>
        </>
      ) : (
        <>
          <View style={styles.containerPhoto}>
            <Image
              style={styles.profileImg}
              resizeMode="cover"
              source={{
                uri:
                  image ||
                  "https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg",
              }}
            />
          </View>
          <ButtonPrimary
            onPress={pickImage}
            style={({ pressed }) => [
              styles.addImageBtn,
              {
                opacity: pressed ? 0.6 : 1,
              },
            ]}
            title={image ? "Edit profile picture" : "Add profile picture"}
          />
        </>
      )}
    </View>
  );
};

export default ImageSelector;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: 320,
  },
  profileImg: {
    marginVertical: 20,
    height: 200,
    width: 200,
    borderRadius: 100,
  },
  containerPhoto: {
    marginVertical: 20,
    height: 200,
    width: 200,
    borderRadius: 100,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  addImageBtn: {
    backgroundColor: colorsDefault.green.primary,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    borderRadius: 10,
    width: "100%",
  },
  addImgText: {
    color: "white",
  },
});
