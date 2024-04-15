import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import { MotiPressable } from "moti/interactions";
import { Ionicons } from "@expo/vector-icons";

export default function CustomAdvancedHeader({navigation}) {

  function goBack() {
    navigation.navigate("ChooseExercise");
  }

  return (
    <View style={styles.container}>
      <MotiPressable
        style={styles.backButton}
        onPress={goBack}
        animate={({ hovered, pressed }) => {
          "worklet";
          return {
            opacity: hovered || pressed ? 0.5 : 1,
          };
        }}
      >
        <Ionicons name="chevron-back-outline" size={20} color="black" />
        <Text style={styles.buttonTitle}>Back</Text>
      </MotiPressable>
      <MotiPressable
        style={styles.addIcon}
        animate={({ hovered, pressed }) => {
          "worklet";
          return {
            scale: hovered || pressed ? 0.9 : 1
          };
        }}
      >
        <Text
          style={{ fontFamily: "Inter-Light", fontSize: 20, color: "black", textAlign: "center" }}
        >
          + Add Card
        </Text>
      </MotiPressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    align: "center",
    margin: 10,
  },
  addIcon: {
    backgroundColor: "#ffd700",
    borderColor: "black",
    borderWidth: 1.5,
    borderRadius: 8,
    padding: 8,
    marginRight: 20,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    width: "auto",
    padding: 11,
    marginLeft: 10,
  },
  buttonTitle: {
    color: "black",
    fontSize: 20,
    fontFamily: "Inter-Light",
  },
});
