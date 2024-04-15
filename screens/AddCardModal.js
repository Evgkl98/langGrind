import { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useDispatch } from "react-redux";
import { addCard, changeCardStatus, editCard } from "../store/myVocab";
import { Alert } from "react-native";
import * as Haptics from "expo-haptics";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Platform } from "react-native";

function AddCardModal({ navigation, onSubmit, route }) {
  const savedWord = route.params?.cardWord;
  const savedtranslation = route.params?.cardTranslation;
  const savedId = route.params?.cardId;
  const isEditing = route.params?.isEditing;
  const isPlaying = route.params?.isPlaying;
  const isAdding = route.params?.isAdding;

  const [isDisabled, setIsDisabled] = useState(false);

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

  const dispatch = useDispatch();

  //Validation part:

  const [inputsValidation, setInputsValidation] = useState({
    wordInputIsValid: true,
    translationInputIsValid: true,
  });

  const wordLabel = () => {
    if (isEditing) {
      return "Edit card";
    } else if (isPlaying) {
      return "Translate the word";
    } else {
      return "New card";
    }
  };

  function onCancel() {
    navigation.navigate("CardGame");
  }

  const validateInputs = () => {
    if (!word && !translation) {
      Alert.alert(
        "Empty input fields",
        "Please write your word and its translation"
      );
      setInputsValidation({
        wordInputIsValid: false,
        translationInputIsValid: false,
      });
    } else if (!word) {
      Alert.alert("Empty input field", "Please write your word");
      setInputsValidation((prevInputs) => ({
        ...prevInputs,
        wordInputIsValid: false,
      }));
    } else if (!translation) {
      Alert.alert(
        "Empty input field",
        "Please write a translation for the word"
      );
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
      dispatch(
        editCard({
          cardId: savedId,
          updatedWord: word,
          updatedTranslation: translation,
        })
      );
      onCancel();
    } else if (isPlaying) {
      const upperCaseWord =
        translation.charAt(0).toUpperCase() + translation.slice(1);
      const lowerCaseWord =
        translation.charAt(0).toLowerCase() + translation.slice(1);
      if (
        upperCaseWord === savedtranslation ||
        lowerCaseWord === savedtranslation
      ) {
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
        setIsCorrect("correct");
        setIsDisabled(true);
        dispatch(changeCardStatus({ cardId: savedId, cardStatus: "correct" }));
        setTimeout(onCancel, 1500);
      } else if (translation === "") {
        return;
      } else {
        Alert.alert("Wrong translation", "Oops... Try once again!");
        setIsCorrect("wrong");
        dispatch(changeCardStatus({ cardId: savedId, cardStatus: "wrong" }));
      }
    } else if (isAdding && word && translation) {
      const cardId = Math.random().toString();
      dispatch(addCard({ cardId, word, translation }));

      console.log("New card:", { cardId, word, translation });

      setWord(""), setTranslation("");

      onCancel();
    }
  }

  return (
    <KeyboardAwareScrollView
      style={{ backgroundColor: styles.container.backgroundColor }}
      resetScrollToCoords={{ x: 0, y: 0 }}
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
        <View style={styles.card}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-end",
              width: "100%",
            }}
          >
            {(isAdding || isEditing) && (
              <AntDesign
                name="infocirlceo"
                size={30}
                color="black"
                style={{ opacity: 0.6, right: 15, top: 7 }}
              />
            )}
            {isPlaying && isCorrect === "correct" && (
              <FontAwesome
                name="check-circle"
                borderColor="black"
                size={50}
                color="green"
                style={{ top: "5%", right: "17%" }}
              />
            )}
            {isPlaying && isCorrect === "wrong" && translation && (
              <MaterialIcons
                name="cancel"
                size={50}
                color="red"
                style={{ top: "5%", right: "10%" }}
              />
            )}
          </View>
          <View
            style={{
              height: 250,
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
            placeholder={isPlaying ? word : "Word"}
            readOnly={isPlaying ? true : false}
            selectTextOnFocus={isPlaying ? false : true}
            onChangeText={(text) => {
              setWordInputTrue();
              setWord(text);
            }}
            value={isEditing && word}
            maxLength={40}
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
            placeholder="Translation"
            readOnly={isCorrect === "correct" ? true : false}
            autoCorrect={false}
            keyboardType="default"
            onChangeText={(wordTranslation) => {
              setTranslationInputTrue();
              setTranslation(wordTranslation);
            }}
            value={isEditing && translation}
            maxLength={40}
            textAlignVertical="top"
          />
          <TouchableOpacity style={[isDisabled && { opacity: 0 }]}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                paddingBottom: 20,
              }}
            >
              <Button
                title="Cancel"
                color="black"
                disabled={isCorrect === "correct" ? true : false}
                onPress={onCancel}
              ></Button>

              <Button
                title={isEditing ? "Edit" : "Confirm"}
                disabled={isCorrect === "correct" ? true : false}
                onPress={onSubmit}
              ></Button>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0000FF",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    height: 500,
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
  cancelButton: {},
  confirmButton: {},
});

export default AddCardModal;
