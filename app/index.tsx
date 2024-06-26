import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import imageHome from "../assets/images/home.png";
import { colorsDefault } from "@/constants/Colors";
import { router } from "expo-router";
import SocialIcons from "@/components/SocialIcons";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image style={styles.imgHome} source={imageHome} />
      </View>
      <View style={styles.welcomeContainer}>
        <View style={{ alignItems: "center", marginTop: 40 }}>
          <Text style={{ color: colorsDefault.vanilla.dark, fontSize: 30 }}>
            ¡Welcome to U travel!
          </Text>
          <View style={{ marginTop: 20, width: "100%", padding: 30 }}>
            <Pressable
              style={{
                backgroundColor: colorsDefault.green.primary,
                alignItems: "center",
                padding: 20,
                borderRadius: 8,
              }}
              onPress={() =>
                router.push({
                  pathname: "/(tabs)/explore",
                  params: { type: "register" },
                })
              }
            >
              <Text
                style={{
                  fontSize: 20,
                  color: "white",
                }}
              >
                Sign Up
              </Text>
            </Pressable>
            <Pressable
              style={{
                backgroundColor: "white",
                alignItems: "center",
                padding: 20,
                borderRadius: 8,
                marginTop: 20,
                shadowColor: "black",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.2,
                shadowRadius: 2,
              }}
              onPress={() =>
                router.push({
                  pathname: "/(auth)/login",
                  params: { type: "login" },
                })
              }
            >
              <Text
                style={{
                  fontSize: 20,
                  color: "black",
                }}
              >
                Sign In
              </Text>
            </Pressable>
            <SocialIcons />
            {/* <Pressable
              style={{
                backgroundColor: "white",
                alignItems: "center",
                padding: 20,
                borderRadius: 8,
                marginTop: 20,
                shadowColor: "black",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.2,
                shadowRadius: 2,
              }}
              onPress={() => router.push("/(tabs)")}
            >
              <Text
                style={{
                  fontSize: 20,
                  color: "black",
                }}
              >
                Home
              </Text>
            </Pressable> */}
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgContainer: {
    marginTop: 200,
    alignItems: "center",
  },
  imgHome: {
    height: 210,
    width: 260,
  },
  welcomeContainer: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    overflow: "hidden",
  },
});
