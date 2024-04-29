import { Text, SafeAreaView, View } from "react-native";
import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { MotiPressable } from "moti/interactions";
import CustomHeader from "../components/CustomHeader";
import landAppLogic from "../data/langAppLogic";


export default function SettingsScreen({ navigation }) {
  const { settingsText } = landAppLogic();

  function goBack() {
    navigation.navigate("ChooseSection");
  }
  function setAppLanguage() {
    navigation.navigate("SetLanguageScreen");
  }
  function aboutGame(){
    navigation.navigate("AboutScreen")
  }
  function feedback(){
    navigation.navigate("FeedbackScreen")
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
          <View style={{ flex: 1, borderBottomWidth: 1, paddingBottom: 5 }}>
            <CustomHeader
              onBack={goBack}
              buttonColor="black"
              headerTitle={settingsText.settingsTitle}
            />
          </View>
          <View style={styles.instructions}>
            <View style={styles.settingsBox}>
              <Text
                style={{
                  fontFamily: "Inter-Light",
                  fontSize: 23,
                  color: "black",
                  paddingHorizontal: 20,
                  paddingVertical: 10,
                  // textDecorationLine: "underline"
                }}
              >
                {settingsText.preferencesTitle}
              </Text>
              <MotiPressable
                onPress={setAppLanguage}
                style={styles.cardSection}
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
                    fontFamily: "Inter-Light",
                    fontSize: 23,
                    color: "#ffd700",
                  }}
                >
                  {settingsText.languageSection}
                </Text>
              </MotiPressable>

              <Text
                style={{
                  fontFamily: "Inter-Light",
                  fontSize: 23,
                  color: "black",
                  paddingHorizontal: 20,
                  paddingVertical: 10,
                  // textDecorationLine: "underline"
                }}
              >
                {settingsText.helpTitle}
              </Text>
              <MotiPressable
                onPress={aboutGame}
                style={styles.cardSection}
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
                    fontFamily: "Inter-Light",
                    fontSize: 23,
                    color: "#ffd700",
                  }}
                >
                  {settingsText.aboutSection}
                </Text>
              </MotiPressable>
              <MotiPressable
              onPress={feedback}
                style={styles.cardSection}
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
                    fontFamily: "Inter-Light",
                    fontSize: 23,
                    color: "#ffd700",
                  }}
                >
                  {settingsText.feedbackSection}
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
  instructions: {
    flex: 11,
    flexDirection: "column",
    paddingTop: 10,
  },
  settingsBox: { flex: 10, flexDirection: "column", paddingTop: "5%" },
  cardSection: {
    backgroundColor: "#0000FF",
    borderRadius: 20,
    width: "90%",
    alignSelf: "center",
    padding: 15,
    margin: 10,
  },
});
