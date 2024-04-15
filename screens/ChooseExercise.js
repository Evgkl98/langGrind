import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  SafeAreaView,
} from "react-native";

// import CustomHeader from "../components/CustomHeader";
import { MotiPressable } from "moti/interactions";

export default function ChooseExercise({ navigation }) {
  function goToCards() {
    navigation.navigate("CardGameStart");
  }
  // function goBack() {
  //   navigation.navigate("StartScreen");
  // }

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
              animate={({ hovered, pressed }) => {
                "worklet";

                return {
                  scale: hovered || pressed ? 0.8 : 1,
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
                CardGame
              </Text>
            </MotiPressable>
            <MotiPressable
              style={[styles.cubicSection, { opacity: 0.8 }]}
              from={{ borderRadius: 8, scale: 1 }}
              // transition={{ delay: 500 }}
              // animate={({ hovered, pressed }) => {
              //   "worklet";

              //   return {
              //     scale: hovered || pressed ? 0.8 : 1,
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
                Translator 
              </Text>
            </MotiPressable>

            <MotiPressable
              style={[styles.cubicSection, { opacity: 0.8 }]}
              from={{ borderRadius: 8, scale: 1 }}
              // animate={({ hovered, pressed }) => {
              //   "worklet";

              //   return {
              //     scale: hovered || pressed ? 0.8 : 1,
              //   };
              // }}
            >
              <Text
                style={{
                  fontFamily: "Inter-Black",
                  fontSize: 25,
                  color: "black",
                }}
              >
                Settings
              </Text>
            </MotiPressable>
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
