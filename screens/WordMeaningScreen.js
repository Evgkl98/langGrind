import {
  Text,
  SafeAreaView,
  View,
  Pressable,
} from "react-native";
import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import CustomHeader from "../components/CustomHeader";
import landAppLogic from "../data/langAppLogic";
import React, { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { iso_lang_codes } from "../ISO_lang_codes";
import Animated, { ZoomInDown, ZoomOutDown } from "react-native-reanimated";
import { Audio } from "expo-av";

export default function WordMeaningScreen({ navigation, route }) {
  const { gameStartText } = landAppLogic();

  function goBack() {
    navigation.navigate("TranslatorScreen");
  }

  const [showConfirmAlert, setShowConfirmAlert] = useState(false);

  const word = route.params?.word;
  const translation = route.params?.translation;
  const meanings = route.params?.meanings;
  const partOfSpeech = route.params?.partOfSpeech;
  const audioFile = route.params?.audioFile;
  const audioPathStatus = route.params?.audioPathStatus;
  const verbForms = route.params?.verbForms;

  console.log(verbForms);

  const pressToPlay = async () => {
    await Audio.setAudioModeAsync({ playsInSilentModeIOS: true });
    const { sound: playbackObject } = await Audio.Sound.createAsync(
      { uri: audioFile },
      { shouldPlay: true }
    );
  };

  console.log(audioFile);

  console.log(meanings);

  function addCard() {
    navigation.navigate("AddCardModal", {
      isAddingFromTranslator: true,
      cardWord: word,
      cardTranslation: translation,
      onGoBack: (value) => {
        setShowConfirmAlert(value);
        setTimeout(() => {
          setShowConfirmAlert(false);
        }, 3000);
      },
    });
  }

  return (
    <>
      <StatusBar style="dark" />
      <SafeAreaView
        style={[
          styles.safeArea,
          { backgroundColor: styles.container.backgroundColor },
        ]}
      >
        <View style={styles.container}>
          <View style={{ flex: 1, borderBottomWidth: 1, borderColor: "black" }}>
            <CustomHeader
              buttonColor="black"
              onBack={goBack}
              twoButtons={true}
              onAddCard={addCard}
            />
          </View>
          <View style={styles.content}>
            <View style={styles.wordContainer}>
              <Text
                style={{
                  fontFamily: "Inter-Bold",
                  fontSize: 32,
                  color: "black",
                  textDecorationLine: "underline",
                }}
              >
                {word}
              </Text>
            </View>
            <View style={styles.meaningContainer}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text
                  style={{
                    fontFamily: "Inter-Regular",
                    fontSize: 24,
                    color: "black",
                  }}
                >
                  {translation}
                </Text>
                <Text
                  style={{
                    fontFamily: "Inter-ExtraLightItalic",
                    fontSize: 18,
                    color: "black",
                    paddingLeft: 6,
                  }}
                >
                  ({partOfSpeech})
                </Text>
              </View>

              {audioPathStatus && (
                <Pressable
                  style={({ pressed }) => pressed && styles.pressed}
                  onPress={pressToPlay}
                >
                  <AntDesign
                    name="sound"
                    size={28}
                    color="black"
                    style={{ paddingTop: 8, paddingLeft: 2 }}
                  />
                </Pressable>
              )}
              <View
                style={{
                  flexDirection: "row",
                  paddingTop: 10,
                  flexWrap: "wrap",
                }}
              >
                <Text
                  style={{
                    fontFamily: "Inter-Italic",
                    fontSize: 18,
                    color: "black",
                  }}
                >
                  {translation.toLowerCase()}
                </Text>
                {verbForms &&
                  verbForms.slice(0,2)
                    .filter(
                      (item) =>
                        item.if.charAt(item.if.length - 1) !== "s"
                        && !item.if.includes("ing")
                    )
                    .map((item) => (
                      <Text
                        key={item.if + "" + Math.random()}
                        style={{
                          fontFamily: "Inter-Italic",
                          fontSize: 18,
                          color: "black",
                        }}
                      >
                        {"-" + item.if.replaceAll("*", "")}
                      </Text>
                    ))}
              </View>
              <View style={{ paddingTop: 10 }}>
                {meanings.map((item, index) => (
                  <Text
                    key={index} // Ensure each item has a unique key
                    style={{
                      fontFamily: "Inter-LightItalic",
                      fontSize: 18,
                      color: "black",
                      textAlign: "left",
                      paddingVertical: 6,
                    }}
                  >
                    •{item}
                  </Text>
                ))}
              </View>
            </View>
          </View>
          {showConfirmAlert && (
            <Animated.View
              style={styles.confirmation}
              entering={ZoomInDown.delay(1000).duration(600)}
              exiting={ZoomOutDown.delay(1000).duration(600)}
            >
              <Text
                style={{
                  fontFamily: "Inter-Regular",
                  fontSize: 20,
                  color: "#ffd700",
                }}
              >
                New card was added!
              </Text>
            </Animated.View>
          )}
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  container: {
    flex: 1,
    backgroundColor: "#ffd700",
    flexDirection: "column",
  },
  content: {
    flex: 10,
    flexDirection: "column",
    alignItems: "center",
  },
  wordContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    paddingTop: 10,
  },
  meaningContainer: {
    justifyContent: "center",
    alignItems: "flex-start",
    width: "90%",
    paddingTop: 6,
  },
  pressed: {
    opacity: 0.5,
  },
  confirmation: {
    height: "10%",
    width: "100%",
    // backgroundColor: "green",
    backgroundColor: "#0000FF",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    position: "absolute",
    top: "90%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});

