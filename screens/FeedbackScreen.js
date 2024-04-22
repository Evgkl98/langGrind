import { Text, SafeAreaView, View, Pressable, TextInput } from "react-native";
import * as Linking from "expo-linking";
import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { MotiView } from "moti";
import CustomHeader from "../components/CustomHeader";
import landAppLogic from "../data/langAppLogic";
import { EvilIcons } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";
import { Dimensions } from "react-native";
import { MotiPressable } from "moti/interactions";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function FeedbackScreen({ navigation }) {
  const { settingsText } = landAppLogic();
  const windowWidth = Dimensions.get("window").width;

  function goBack() {
    navigation.navigate("SettingsScreen");
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
                alignItems: "center"
              }}
            >
              <Text style={{ fontFamily: "Inter-Black", fontSize: 30 }}>
                Tell me something {":)"}
              </Text>
              <Text style={{ fontFamily: "Inter-Light", fontSize: 15, textAlign: "center" }}>
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
                  marginBottom: 30,
                }}
              ></TextInput>
              <MotiPressable
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
