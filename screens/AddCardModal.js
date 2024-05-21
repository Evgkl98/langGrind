import { useEffect, useState } from "react";
import { View, TextInput, StyleSheet, Text, Button } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useDispatch } from "react-redux";
import { changeCurrentAction } from "../store/myVocab";
import { Alert } from "react-native";
import * as Haptics from "expo-haptics";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Platform } from "react-native";
import landAppLogic from "../data/langAppLogic";
import { useWindowDimensions } from "react-native";
import { Card } from "../modal/card";
import { insertCard } from "../data/database";
import { editCard } from "../data/database";
import { changeCardStatus, fetchCards } from "../data/database";
import Animated, { ZoomIn } from "react-native-reanimated";

function AddCardModal({ navigation, route }) {
  const { modalText, buttons, alerts } = landAppLogic();
  const dispatch = useDispatch();

  //Fetching route params

  const savedWord = route.params?.cardWord;
  const savedtranslation = route.params?.cardTranslation;
  const savedId = route.params?.cardId;
  const isEditing = route.params?.isEditing;
  const isPlaying = route.params?.isPlaying;
  const isAdding = route.params?.isAdding;

  // Setting Modal name:

  const translationLabel = () => {
    if (isEditing) {
      return savedtranslation;
    } else if (isPlaying) {
      return "";
    } else {
      return "";
    }
  };

  const [word, setWord] = useState(isEditing || isPlaying ? savedWord : "");
  const [translation, setTranslation] = useState(translationLabel());
  const [isCorrect, setIsCorrect] = useState("default");

  //Fetching cards from database:

  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function loadCards() {
      const dbCards = await fetchCards();
      setCards(dbCards);
    }
    loadCards();
  }, []);

  //Styling adjustments:

  const extraPadding = Platform.OS === "android" ? 20 : 0;
  const { height } = useWindowDimensions();
  const adjustedHeight = Platform.OS === "android" ? height * 0.8 : 500;

  const [isDisabled, setIsDisabled] = useState(false);

  async function addNewCard() {
    const newCard = { ...new Card(word.trim(), translation.trim(), "default") };
    await insertCard(newCard);
    dispatch(changeCurrentAction(`adding card ${word}-${translation}`));
  }





  //Validation part:

  const [inputsValidation, setInputsValidation] = useState({
    wordInputIsValid: true,
    translationInputIsValid: true,
  });

  const upperCaseWord = (word.charAt(0).toUpperCase() + word.slice(1)).trim();
  const lowerCaseWord = (word.charAt(0).toLowerCase() + word.slice(1)).trim();

  const upperCaseTranslation = (
    translation.charAt(0).toUpperCase() + translation.slice(1)
  ).trim();
  const lowerCaseTranslation = (
    translation.charAt(0).toLowerCase() + translation.slice(1)
  ).trim();

  const wordLabel = () => {
    if (isEditing) {
      return `${modalText.editCard}`;
    } else if (isPlaying) {
      return `${modalText.playCard}`;
    } else {
      return `${modalText.newCard}`;
    }
  };

  function onCancel() {
    navigation.navigate("CardGame");
  }

  const validateInputs = () => {
    if (!word && !translation) {
      Alert.alert(alerts.noTextAndTranslation, alerts.noTextAndTranslation2);
      setInputsValidation({
        wordInputIsValid: false,
        translationInputIsValid: false,
      });
    } else if (!word) {
      Alert.alert(alerts.noWord, alerts.noWord2);
      setInputsValidation((prevInputs) => ({
        ...prevInputs,
        wordInputIsValid: false,
      }));
    } else if (!translation) {
      Alert.alert(alerts.noTranslation, alerts.noTranslation2);
      setInputsValidation((prevInputs) => ({
        ...prevInputs,
        translationInputIsValid: false,
      }));
    }
  };

  const setWordInputTrue = () => {
    setInputsValidation((prevInputs) => ({
      ...prevInputs,
      wordInputIsValid: true,
    }));
  };

  const setTranslationInputTrue = () => {
    setInputsValidation((prevInputs) => ({
      ...prevInputs,
      translationInputIsValid: true,
    }));
  };

  // Submittion part:

  function onSubmit() {
    validateInputs();
    if (isEditing && word && translation) {
      editCard(word.trim(), translation.trim(), savedId);
      dispatch(
        changeCurrentAction(
          `card with ${savedId} has changed to ${word}-${translation}`
        )
      );
      onCancel();
    } else if (isPlaying) {
      if (
        upperCaseTranslation.trim() === savedtranslation ||
        lowerCaseTranslation.trim() === savedtranslation
      ) {
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
        setIsCorrect("correct");
        setIsDisabled(true);
        changeCardStatus(savedId, "correct");
        dispatch(changeCurrentAction(`${savedId} is correct`));

        setTimeout(onCancel, 1500);
      } else if (translation === "") {
        return;
      } else {
        Alert.alert(alerts.wrongAnswer, alerts.wrongAnswer2);
        setIsCorrect("wrong");
        changeCardStatus(savedId, "wrong");
        dispatch(changeCurrentAction(`${savedId} is wrong`));
      }
    } else if (isAdding && word && translation) {
      const checkIfExists = cards.findIndex(
        (element) =>
          (element.translation === upperCaseTranslation ||
            element.translation === lowerCaseTranslation) &&
          (element.word === upperCaseWord || element.word === lowerCaseWord)
      );
      if (checkIfExists > -1) {
        return Alert.alert(alerts.cardExists, alerts.cardExists2);
      } else {
        addNewCard();

        setWord(""), setTranslation("");

        onCancel();
      }
    }
  }

  return (
    <KeyboardAwareScrollView
      style={{
        flex: 1,
        backgroundColor: styles.container.backgroundColor,
        paddingTop: extraPadding,
      }}
    >
      <View style={styles.container}>
        <View
          style={{
            backgroundColor: "#ffd700",
            width: "90%",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            height: 50,
            borderColor: "black",
            borderWidth: 2,
            borderRadius: 10,
            marginTop: 25,
          }}
        >
          <Text
            style={{
              color: "black",
              fontFamily: "Inter-Regular",
              fontSize: 23,
            }}
          >
            {wordLabel()}
          </Text>
        </View>
        <View style={[styles.card, { height: adjustedHeight }]}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-end",
              alignItems: "center",
              width: "100%",
              flex: 1,
              paddingRight: 10,
            }}
          >
            
              <View style={{height: "65%", width: "15%", justifyContent: "center", alignItems: "center"}}>
              {isPlaying && isCorrect === "correct" && (
              <Animated.View
                entering={ZoomIn.springify().duration(400)}
              >
                <FontAwesome
                  name="check-circle"
                  borderColor="black"
                  size={50}
                  color="green"
                />
              </Animated.View>
              )}
              </View>
            
            {isPlaying && isCorrect === "wrong" && translation && (
              <View>
              <Animated.View
              entering={ZoomIn.springify().duration(400)}>
              <MaterialIcons
                name="cancel"
                size={50}
                color="#ff3800"
              />
              </Animated.View>
              </View>
            )}
          </View>
          <View
            style={{
              flex: 3,
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              paddingLeft: 15,
              paddingRight: 18,
            }}
          >
            <Text
              style={{
                fontFamily: "Inter-Black",
                fontSize: 35,
                marginBottom: 15,
                textAlign: "center",
                marginHorizontal: 10,
              }}
            >
              {word}
            </Text>
            <Text
              style={[
                {
                  fontFamily: "Inter-Light",
                  fontSize: 25,
                  textAlign: "center",
                  marginHorizontal: 10,
                },
                isCorrect === "correct" && { color: "green" },
              ]}
            >
              {(isCorrect === "wrong" || isCorrect === "default") &&
              !isAdding &&
              !isEditing
                ? "???"
                : savedtranslation || translation}
            </Text>
          </View>
          <TextInput
            style={[
              styles.inputStyle,
              { fontSize: 20, padding: 8 },
              !inputsValidation.wordInputIsValid && styles.invalidInput,
              isPlaying && { borderColor: "lightgrey" },
            ]}
            autoCorrect={false}
            keyboardType="default"
            placeholder={isPlaying ? word : `${modalText.wordPlaceholder}`}
            readOnly={isPlaying ? true : false}
            selectTextOnFocus={isPlaying ? false : true}
            onChangeText={(text) => {
              setWordInputTrue();
              setWord(text);
            }}
            value={isEditing && word}
            maxLength={30}
            textAlignVertical="top"
          />
          <TextInput
            style={[
              styles.inputStyle,
              { fontSize: 20, padding: 8 },
              { marginBottom: "10%" },
              (!inputsValidation.translationInputIsValid ||
                isCorrect === "wrong") &&
                styles.invalidInput,
              isCorrect === "correct" && {
                borderColor: "green",
                backgroundColor: "#B0E2B0",
              },
            ]}
            placeholder={modalText.translationPlaceholder}
            readOnly={isCorrect === "correct" ? true : false}
            autoCorrect={false}
            keyboardType="default"
            onChangeText={(wordTranslation) => {
              setTranslationInputTrue();
              setTranslation(wordTranslation);
            }}
            value={isEditing && translation}
            maxLength={30}
            textAlignVertical="top"
          />
          <View style={[isDisabled && { opacity: 0 }]}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                paddingBottom: 20,
              }}
            >
              <Button
                title={buttons.cancelButton}
                color="black"
                disabled={isCorrect === "correct" ? true : false}
                onPress={onCancel}
              ></Button>

              <Button
                title={
                  isEditing
                    ? `${buttons.editButton}`
                    : `${buttons.confirmButton}`
                }
                disabled={isCorrect === "correct" ? true : false}
                onPress={onSubmit}
              ></Button>
            </View>
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0000FF",
    alignItems: "center",
  },
  card: {
    marginTop: 20,
    width: "90%",
    backgroundColor: "#ffd700",
    borderWidth: 2,
    borderRadius: 10,
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  inputStyle: {
    fontFamily: "Inter-Light",
    marginHorizontal: 20,
    marginVertical: 10,
    backgroundColor: "white",
    borderRadius: 8,
    borderColor: "black",
    borderWidth: 1,
  },
  invalidInput: {
    borderWidth: 1,
    borderColor: "red",
    backgroundColor: "#FFD6D7",
  },
});

export default AddCardModal;
