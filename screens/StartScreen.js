import { StyleSheet, View } from "react-native"; 
import { MotiView, MotiText } from "moti";
import { MotiPressable } from "moti/interactions";
import { useState } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react"; 


export default function StartScreen({ navigation }) {
  const [cubeScale, setCubeScale] = useState(1.5);

  function handleScale(isPressed) {
    if (isPressed && cubeScale === 1.5) {
      setCubeScale((cubeScale) => (cubeScale = 20));
      setTimeout(() => {
        navigation.navigate("ChooseExercise");
      }, 700);
      setTimeout(() => {
        setCubeScale((cubeScale) => (cubeScale = 1.5));
      }, 1100);
    } else if (isPressed && cubeScale === 20) {
      setCubeScale((cubeScale) => (cubeScale = 1.5));
    }
  }

  const [fontsLoaded, fontError] = useFonts({
    "Inter-Black": require("../assets/fonts/Inter-Black.ttf"),
    "Inter-Light": require("../assets/fonts/Inter-Light.ttf"),
    "Inter-Medium": require("../assets/fonts/Inter-Medium.ttf"),
    "Inter-Regular": require("../assets/fonts/Inter-Regular.ttf"),
    "InterDisplay-Light": require("../assets/fonts/InterDisplay-Light.ttf"),
    "Inter-ThinItalic": require("../assets/fonts/Inter-ThinItalic.ttf"),
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
    <View style={styles.container}>
      <MotiText
        style={{ fontFamily: "Inter-Black", fontSize: 40 }}
        onLayout={onLayoutReview}
      >
        LangGrind
      </MotiText>
      <MotiPressable
        onPress={handleScale}
        
      >
        <MotiView
          style={styles.cubic}
          from={{ scale: cubeScale }}
          transition={{ duration: 2300 }}
        ></MotiView>
      </MotiPressable>
      <MotiView
        style={styles.cubic}
        from={{ scale: 0 }}
        animate={{
          rotate: [
            "0deg",
            "90deg",
            "180deg",
            "270deg",
            "360deg",
            "270deg",
            "180deg",
            "90deg",
            "-360deg",
          ],
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
