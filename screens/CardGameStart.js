import { MotiView } from "moti";
import { Text, SafeAreaView } from "react-native";
import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { MotiPressable } from "moti/interactions";
import { FontAwesome5 } from "@expo/vector-icons";
import CustomHeader from "../components/CustomHeader";


export default function CardGameStart({ navigation }) {
  function goBack() {
    navigation.navigate("ChooseExercise");
  }
  function goToCardGame(){
    navigation.navigate("CardGame")
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
        <MotiView style={styles.container}>
          <CustomHeader onBack={goBack} buttonColor="black" />
          <MotiView style={styles.instructions}>
            <Text
              style={{
                fontFamily: "Inter-Black",
                fontSize: 40,
                color: "black",
                bottom: "15%",
              }}
            >
              Instructions
            </Text>
            <Text
              style={{
                fontFamily: "Inter-Light",
                fontSize: 20,
                color: "black",
                bottom: "10%",
                textAlign: "center",
                paddingHorizontal: 20
              }}
            >
              Tap on a card and translate the word on it
            </Text>
            <MotiPressable
              style={styles.playButton}
              onPress={goToCardGame}
              animate={({ hovered, pressed }) => {
                "worklet";

                return {
                  scale: hovered || pressed ? 0.8 : 1,
                };
              }}
            >
              <FontAwesome5
                name="play"
                size={50}
                color={styles.container.backgroundColor}
              />
            </MotiPressable>
          </MotiView>
        </MotiView>
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
    flex: 1,
    paddingTop: 30,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffd700", 
  },
  playButton: {
    height: 140,
    width: 140,
    backgroundColor: "#0000FF",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 5,
  },
});
