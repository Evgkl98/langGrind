import {
  Text,
  SafeAreaView,
  View,
  TextInput,
  useWindowDimensions,
  Alert,
} from "react-native";

import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { FontAwesome5 } from "@expo/vector-icons";
import CustomHeader from "../components/CustomHeader";
import React, { useState, useEffect } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AntDesign from "@expo/vector-icons/AntDesign";
import { MotiPressable } from "moti/interactions";
import { translateWord } from "../google_translator_api";
import { iso_lang_codes } from "../ISO_lang_codes";
import { Modal } from "react-native";
import Loading from "root/components/Loading";
import { findWord } from "root/dictionary_api";
import landAppLogic from "../data/langAppLogic";
import NetInfo from "@react-native-community/netinfo";

export default function TranslatorScreen({ navigation }) {
  //Check internet connection:

  const [netState, setNetState] = useState(true);
  useEffect(() => {
    NetInfo.fetch().then((state) => {
      state.isConnected ? setNetState(true) : setNetState(false);
      console.log("Is connected?", state.isConnected);
    });
  }, []);

  console.log(netState);

  const [word, setWord] = useState("");
  const [language, setLanguage] = useState("English");
  const [isLoading, setIsLoading] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const { modalText, buttons, alerts } = landAppLogic();

  function goBack() {
    navigation.navigate("ChooseSection");
  }
  // function goToCardGame() {
  //   navigation.navigate("CardGame");
  // }

  function goToWord(
    requestedWord,
    receivedResult,
    meanings,
    partOfSpeech,
    audioFile,
    audioPathStatus,
    verbForms
  ) {
    navigation.navigate("WordMeaningScreen", {
      word: requestedWord,
      translation: receivedResult,
      meanings: meanings,
      partOfSpeech,
      audioFile,
      audioPathStatus,
      verbForms,
    });
  }

  // goToWord(word, result, meanings, partOfSpeech);
  // Google API Translation - for translation
  // Merriam-Webster - for meaning

  const sendRequest = async () => {
    if (word.trim() === "") {
      Alert.alert(alerts.noWord, alerts.noWord2);
    } else {
      try {
        setIsLoading(true);
        const result = await translateWord(word, "en"); // just translates to Eng
        const formattedResult = result.toLowerCase().replace("to ", "");
        const dictResponse = await findWord(formattedResult); // receive all JSON data

        if (!dictResponse.meanings || !dictResponse.partOfSpeech) {
          // Handle case where word is not found
          setIsLoading(false);
          Alert.alert(
            "Word is not found",
            "Sorry, the word is not found in the dictionary."
          );
          return;
        }
        const meanings = dictResponse.meanings;
        const partOfSpeech = dictResponse.partOfSpeech;
        const audioUrl = dictResponse.audioUrl;
        const audioPathStatus = dictResponse.audioPathStatus;
        const verbForms = dictResponse.verbForms;

        setIsLoading(false);
        goToWord(
          word,
          result,
          meanings,
          partOfSpeech,
          audioUrl,
          audioPathStatus,
          verbForms
        );
      } catch (error) {
        console.log(error);
      }
    }
  };

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
          <View style={{ flex: 1, borderColor: "black" }}>
            <CustomHeader buttonColor="black" onBack={goBack} />
          </View>

          <Modal
            animationType="fade"
            transparent={true}
            visible={isLoading}
            // onRequestClose={() => {
            //   setModalVisible(false);
            // }}
          >
            <Loading />
          </Modal>

          <View style={styles.content}>
            <KeyboardAwareScrollView
              scrollEnabled={isFocused}
              contentContainerStyle={{
                flex: 1,
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View style={styles.firstInner}>
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
                      Not sure what the word means? Write your word below, press
                      the button and get the meaning of the word
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
              </View>
              <View style={styles.secondInner}>
                <View
                  style={[
                    styles.inputFields,
                    { flexDirection: "column", justifyContent: "flex-end" },
                  ]}
                >
                  <Text
                    style={{
                      fontFamily: "Inter-Bold",
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
                        {
                          fontSize: 20,
                          marginTop: 14,
                          marginBottom: 22,
                          fontFamily: "Inter-Light",
                        },
                        //   !inputsValidation.wordInputIsValid && styles.invalidInput,
                      ]}
                      onChangeText={(text) => setWord(text)}
                      onFocus={() => setIsFocused(true)}
                      onBlur={() => setIsFocused(false)}
                      autoCorrect={false}
                      keyboardType="default"
                      placeholder="Cat (for example)"
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
                        fontSize: 22,
                        color: "#ffd700",
                        textAlign: "center",
                      }}
                    >
                      Search
                    </Text>
                  </MotiPressable>
                </View>
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
    flex: 11,
  },
  title: {
    flex: 3,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  firstInner: {
    flex: 3,
    width: "95%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  secondInner: {
    flex: 2,
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
  },
  inputFields: {
    flex: 2,
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
  pressed: {
    opacity: 0.5,
  },
});
