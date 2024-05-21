import {
  Text,
  SafeAreaView,
  View,
  TextInput,
  useWindowDimensions,
} from "react-native";
import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { FontAwesome5 } from "@expo/vector-icons";
import CustomHeader from "../components/CustomHeader";
import landAppLogic from "../data/langAppLogic";
import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AntDesign from "@expo/vector-icons/AntDesign";
import { MotiPressable } from "moti/interactions";

export default function TranslatorScreen({ navigation }) {
  const { gameStartText } = landAppLogic();

  const [word, setWord] = useState("");
  const [language, setLanguage] = useState("");

  const dataLanguages = [
    { key: "1", value: "English" },
    { key: "2", value: "German" },
    { key: "3", value: "French" },
    { key: "4", value: "Italian" },
    { key: "5", value: "Russian" },
    { key: "6", value: "Czech" },
    { key: "7", value: "Spanish" },
  ];

  function goBack() {
    navigation.navigate("ChooseSection");
  }
  // function goToCardGame() {
  //   navigation.navigate("CardGame");
  // }
  function sendRequest() {
    return null;
  }

  console.log(language);
  console.log(word);

  const { windowHeight, windowWidth } = useWindowDimensions();

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
            <CustomHeader buttonColor="black" onBack={goBack} />
          </View>

          <View style={styles.content}>
            <KeyboardAwareScrollView
              contentContainerStyle={{
                flex: 1,
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View style={styles.title}>
                <Text
                  style={{
                    fontFamily: "Inter-Black",
                    fontSize: 40,
                    color: "black",
                  }}
                >
                  Translator
                </Text>
                <View style={{ width: "90%" }}>
                  <Text
                    style={{
                      fontFamily: "Inter-Light",
                      fontSize: 20,
                      color: "black",
                      textAlign: "center",
                    }}
                  >
                    Not sure what the word means? Write your word below, choose
                    the language and get the meaning of the word
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flex: 1,
                  width: "100%",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                }}
              >
                <AntDesign name="search1" size={42} color="black" />
                <FontAwesome name="language" size={46} color="black" />
                <FontAwesome name="globe" size={46} color="black" />
                <FontAwesome5 name="book-open" size={46} color="black" />
                <FontAwesome5 name="book" size={46} color="black" />
                {/* 66 - size */}
              </View>
              <View style={styles.inputFields}>
                <Text
                  style={{
                    fontFamily: "Inter-Regular",
                    fontSize: 22,
                    color: "black",
                    textAlign: "center",
                  }}
                >
                  Your word:
                </Text>
                <View>
                  <TextInput
                    style={[
                      styles.inputStyle,
                      { fontSize: 20 },
                      //   !inputsValidation.wordInputIsValid && styles.invalidInput,
                    ]}
                    onChangeText={(text) => setWord(text)}
                    autoCorrect={false}
                    keyboardType="default"
                    placeholder="Cat (for example)"
                    maxLength={30}
                    textAlignVertical="top"
                    textAlign="left"
                  />
                </View>
                <Text
                  style={{
                    fontFamily: "Inter-Regular",
                    fontSize: 22,
                    color: "black",
                    textAlign: "center",
                  }}
                >
                  Translate to
                </Text>
                <View style={{ minWidth: "100%" }}>
                  <TextInput
                    onChangeText={(lang) => setLanguage(lang)}
                    style={[
                      styles.inputStyle,
                      { fontSize: 20 },
                      //   !inputsValidation.wordInputIsValid && styles.invalidInput,
                    ]}
                    autoCorrect={false}
                    keyboardType="default"
                    placeholder="Language"
                    maxLength={30}
                    textAlignVertical="top"
                    textAlign="left"
                  />
                </View>
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: 20,
                }}
              >
                <MotiPressable
                  onPress={sendRequest}
                  style={[styles.button]}
                  from={{ scale: 1 }}
                  animate={({ pressed }) => {
                    "worklet";
                    return {
                      scale: pressed ? 0.85 : 1,
                    };
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "Inter-Regular",
                      fontSize: 23,
                      color: "#ffd700",
                      textAlign: "center",
                    }}
                  >
                    Search
                  </Text>
                </MotiPressable>
              </View>
            </KeyboardAwareScrollView>
          </View>
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
  },
  content: {
    flex: 10,
    // flexDirection: "column",
    // justifyContent: "center",
    // alignItems: "center",
  },
  title: {
    flex: 3,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  inputFields: {
    flex: 3,
    width: "85%",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
  },
  inputStyle: {
    fontFamily: "Inter-Light",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 8,
    paddingLeft: 6,
    minWidth: "100%",
  },
  button: {
    backgroundColor: "#0000FF",
    borderRadius: 20,
    minWidth: "85%",
    paddingVertical: 14,
  },
});
