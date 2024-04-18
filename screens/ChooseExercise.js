import { Text, View, StyleSheet, StatusBar, SafeAreaView } from "react-native";

// import CustomHeader from "../components/CustomHeader";
import { MotiPressable } from "moti/interactions";
import { MotiView } from "moti";

// Language imports:
import landAppLogic from "../data/langAppLogic";
import { useSelector } from "react-redux";

export default function ChooseExercise({ navigation }) {
  const { sectionsText } = landAppLogic();

  const language = useSelector((state) => state.languageReducer);

  function goToCards() {
    navigation.navigate("CardGameStart");
  }

  // function goBack() {
  //   navigation.navigate("StartScreen");
  // }

  function goToSettings() {
    navigation.navigate("SettingsScreen");
  }

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView
        style={[
          styles.safeArea,
          { backgroundColor: styles.container.backgroundColor },
        ]}
      >
        <View style={styles.container}>
          {/* <CustomHeader onBack={goBack} buttonColor="#ffd700" /> */}
          <View style={styles.exercises}>
            <MotiPressable
              onPress={goToCards}
              style={styles.cubicSection}
              from={{ borderRadius: 8, scale: 0 }}
              animate={({ pressed }) => {
                "worklet";

                return {
                  scale: pressed ? 0.8 : 1,
                };
              }}
            >
              <Text
                style={{
                  fontFamily: "Inter-Black",
                  fontSize: 22,
                  color: "black",
                }}
              >
                {sectionsText.firstSection}
              </Text>
            </MotiPressable>
            <MotiView
              from={{ borderRadius: 8, scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 300 }}
            >
              <MotiPressable
                style={[styles.cubicSection, { opacity: 0.8 }]}
                // animate={({ pressed }) => {
                //   "worklet";

                //   return {
                //     scale: pressed ? 0.8 : 1,
                //   };
                // }}
              >
                <Text
                  style={{
                    fontFamily: "Inter-Black",
                    fontSize: 23,
                    color: "black",
                    textAlign: "center",
                  }}
                >
                  {sectionsText.secondSection}
                </Text>
                <Text
                  style={{
                    fontFamily: "Inter-Light",
                    fontSize: 15,
                    top: 5,
                    textDecorationLine: "underline",
                  }}
                >
                  ({sectionsText.secondSectionSoon})
                </Text>
              </MotiPressable>
            </MotiView>
            <MotiView
              from={{ borderRadius: 8, scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 600 }}
            >
              <MotiPressable
                style={styles.cubicSection}
                onPress={goToSettings}
                animate={({ pressed }) => {
                  "worklet";

                  return {
                    scale: pressed ? 0.8 : 1,
                  };
                }}
              >
                <Text
                  style={{
                    fontFamily: "Inter-Black",
                    fontSize: 25,
                    color: "black",
                  }}
                >
                  {sectionsText.thirdSection}
                </Text>
              </MotiPressable>
            </MotiView>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  exercises: { flex: 1, justifyContent: "center" },
  container: {
    flex: 1,
    flexDirection: "colomn",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0000FF",
  },
  cubicSection: {
    height: 150,
    width: 150,
    marginVertical: 20,
    backgroundColor: "#ffd700",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
});
