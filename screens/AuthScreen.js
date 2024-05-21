import { useEffect, useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  Button,
  Pressable,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useDispatch } from "react-redux";

import { Platform } from "react-native";
import landAppLogic from "../data/langAppLogic";
import { useWindowDimensions } from "react-native";

import Animated, {
  FadeInLeft,
  SlideInDown,
  SlideInRight,
  SlideOutLeft,
  SlideOutRight,

} from "react-native-reanimated";
import AuthButton from "../components/AuthButton";

import TypingAnimation from "../components/TypingAnimation";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function AuthScreen({ navigation }) {
  const dispatch = useDispatch();

  const extraPadding = Platform.OS === "android" ? 20 : 0;
  const { height } = useWindowDimensions();
  const adjustedHeight = Platform.OS === "android" ? height * 0.8 : 500;

  const [slideAnim, setSlideAnim] = useState(false);

  //Validation part:

  // Submittion part:

  return (
    <View style={{flex: 1, backgroundColor: "#0000FF"}}>
      {!slideAnim && (
        <Animated.View style={styles.container} exiting={SlideOutLeft}>
          <View style={styles.about}>
            <Animated.Text
              entering={FadeInLeft}
              style={{
                fontSize: 46,
                fontFamily: "Inter-Bold",
                color: "#ffd700",
                marginTop: 20,
              }}
            >
              Welcome to LandGrind,
            </Animated.Text>
            <TypingAnimation text="an app that will grinds your vocabulary"></TypingAnimation>
          </View>
          <Animated.View
            entering={SlideInDown.duration(500).delay(3000)}
            style={styles.card}
          >
            <AntDesign name="user" size={50} color="black" />
            <View style={{ width: "90%" }}>
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: "Inter-Light",
                  color: "black",
                  textAlign: "center",
                }}
              >
                Create an account, log in or try an app in guest mode
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-evenly",
              }}
            >
              <AuthButton title="Log In" />
              <AuthButton title="Sign Up" />
            </View>
            <Pressable
              style={({ pressed }) => pressed && styles.pressed}
              onPress={() => {
                setSlideAnim(true);
                navigation.navigate("ChooseSection");
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: "Inter-Bold",
                  color: "black",
                  textAlign: "center",
                  bottom: 4
                }}
              >
                Continue as a guest
              </Text>
            </Pressable>
          </Animated.View>
        </Animated.View>
      )
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#0000FF",
    alignItems: "center",
  },
  about: {
    flex: 4,
    marginTop: 20,
    width: "90%",
  },
  card: {
    flex: 4,
    width: "90%",
    backgroundColor: "#ffd700",
    borderWidth: 2,
    borderRadius: 10,
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginBottom: 80
  },
  pressed: {
    opacity: 0.3,
  },
});
