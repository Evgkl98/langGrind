import {
  Text,
  SafeAreaView,
  View,
  TextInput,
  Alert,
} from "react-native";
import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import CustomHeader from "../components/CustomHeader";
import landAppLogic from "../data/langAppLogic";
import { Dimensions } from "react-native";
import { MotiPressable } from "moti/interactions";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useState } from "react";


export default function FeedbackScreen({ navigation }) {
  const { settingsText } = landAppLogic();
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  const [message, setMessage] = useState("");

  function sendMessage() {
    if (message === ""){
      return Alert.alert("Empty input field", "Please check your feedback message")
    } else {
      Alert.alert("Thank you for your feedback")
      setTimeout(goBack, 1000)
    }
  }

  function goBack() {
    navigation.navigate("SettingsScreen");
  }

  return (
    <KeyboardAwareScrollView
      style={{ backgroundColor: styles.container.backgroundColor }}
      resetScrollToCoords={{ x: 0, y: 0 }}
    >
      <StatusBar style="dark" />
      <SafeAreaView
        style={[
          styles.safeArea,
          { backgroundColor: styles.container.backgroundColor },
        ]}
      >
        <View style={[styles.container, { height: windowHeight * 0.95 }]}>
          <View style={{ flex: 1, paddingBottom: 5 }}>
            <CustomHeader
              onBack={goBack}
              buttonColor="black"
              // headerTitle="Give Feedback"
            />
          </View>

          <View style={styles.content}>
            <View
              style={{
                flex: 1,
                width: windowWidth * 0.85,
                flexDirection: "column",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <Text style={{ fontFamily: "Inter-Black", fontSize: 30 }}>
                Tell me something {":)"}
              </Text>
              <Text
                style={{
                  fontFamily: "Inter-Light",
                  fontSize: 15,
                  textAlign: "center",
                }}
              >
                Here you can freely write about bugs, improvements and your
                ideas.
              </Text>
            </View>
            <View
              style={{
                flex: 4,
                flexDirection: "column",
                justifyContent: "space-around",
                alignItems: "center",
                paddingBottom: 25,
              }}
            >
              <MaterialCommunityIcons
                name="email-edit-outline"
                size={100}
                color="black"
              />
              <TextInput
                onChangeText={(text) => setMessage(text)}
                multiline
                textAlignVertical="top"
                placeholder="Write about your experience with app..."
                style={{
                  fontFamily: "Inter-Light",
                  fontSize: 15,
                  borderWidth: 1,
                  width: windowWidth * 0.85,
                  height: "50%",
                  borderRadius: 10,
                  paddingHorizontal: 10,
                  paddingTop: 10,
                  paddingBottom: 10,
                  marginBottom: 10,
                }}
              ></TextInput>
              <MotiPressable
                onPress={sendMessage}
                style={[styles.cardSection, { width: windowWidth * 0.85 }]}
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
                  Send feedback
                </Text>
              </MotiPressable>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  container: {
    backgroundColor: "#ffd700",
  },
  content: {
    flex: 11,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    paddingTop: 20,
  },
  cardSection: {
    backgroundColor: "#0000FF",
    borderRadius: 20,
    width: "100%",
    padding: 15,
  },
});
