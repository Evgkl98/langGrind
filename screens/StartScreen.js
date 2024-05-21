import { StyleSheet, View } from "react-native";
import { MotiView, MotiText } from "moti";
import { useEffect, useState } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import { StatusBar } from "expo-status-bar";

SplashScreen.preventAutoHideAsync();

export default function StartScreen({ navigation }) {
  const [cubeScale, setCubeScale] = useState(1.5);

  useEffect(() => {
    setTimeout(() => {
      setCubeScale(20);
      setTimeout(() => {
        navigation.navigate("ChooseSection");
        // navigation.navigate("AuthScreen")
      }, 700);
    }, 3000);
  }, []);

  const [fontsLoaded, fontError] = useFonts({
    "Inter-Black": require("../assets/fonts/Inter-Black.ttf"),
    "Inter-Light": require("../assets/fonts/Inter-Light.ttf"),
    "Inter-Regular": require("../assets/fonts/Inter-Regular.ttf"),
    "Inter-Bold": require("../assets/fonts/Inter-Bold.ttf"),
    "Inter-BoldItalic": require("../assets/fonts/Inter-BoldItalic.ttf"),
    "Inter-ExtraBold": require("../assets/fonts/Inter-ExtraBold.ttf"),
    "Inter-ExtraBoldItalic": require("../assets/fonts/Inter-ExtraBoldItalic.ttf"),
    "Inter-ExtraLight": require("../assets/fonts/Inter-ExtraLight.ttf"),
    "Inter-ExtraLightItalic": require("../assets/fonts/Inter-ExtraLightItalic.ttf"),
    "Inter-Italic": require("../assets/fonts/Inter-Italic.ttf"),
    "Inter-LightItalic": require("../assets/fonts/Inter-LightItalic.ttf"),
    "Inter-Medium": require("../assets/fonts/Inter-Medium.ttf"),
    "Inter-SemiBold": require("../assets/fonts/Inter-SemiBold.ttf"),
    "Inter-MediumItalic": require("../assets/fonts/Inter-MediumItalic.ttf"),
    "Inter-SemiBoldItalic": require("../assets/fonts/Inter-SemiBoldItalic.ttf"),
    "Inter-Thin.ttf": require("../assets/fonts/Inter-Thin.ttf"),
    "Inter-ThinItalic": require("../assets/fonts/Inter-ThinItalic.ttf")
  });

  const onLayoutReview = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <>
      <StatusBar hidden />
      <View style={styles.container}>
        <MotiText
          from={{ scale: 0 }}
          animate={{ scale: 1 }}
          style={{ fontFamily: "Inter-Black", fontSize: 40 }}
          onLayout={onLayoutReview}
        >
          LangGrind
        </MotiText>
        <MotiView from={{ scale: 0 }}
          animate={{ scale: 1 }}>
          <MotiView
            style={styles.cubic}
            from={{ scale: cubeScale }}
            transition={{ duration: 2300, stiffness: 100 }}
          ></MotiView>
        </MotiView>
        <MotiView
          style={styles.cubic}
          from={{ scale: 0 }}
          animate={{
            rotate: ["0deg", "90deg", "180deg", "270deg", "0deg"],
            scale: 1,
          }}
          transition={{
            rotate: {
              duration: 1000,
              type: "spring",
              repeat: Infinity,
              delay: 0,
            },
          }}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffd700",
  },
  cubic: {
    height: 50,
    width: 50,
    backgroundColor: "#0000FF",
    marginTop: 40,
    borderRadius: 8,
  },
});
