import { Text, Pressable, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import landAppLogic from "../data/langAppLogic";

export default function AddButton({ onPress, withoutBorder }) {
  const {buttons} = landAppLogic()
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={[styles.addIcon, withoutBorder && { borderColor: 0 }]}>
        <Ionicons name="add" size={23} color="black" />
        <Text
          style={{
            fontFamily: "Inter-Regular",
            fontSize: 20,
            color: "black",
          }}
        >
          {buttons.addButton}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  addIcon: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffd700",
    borderColor: "black",
    borderWidth: 1.5,
    borderRadius: 8,
    padding: 10,
    paddingRight: 15,
  },
  pressed: {
    opacity: 0.3,
  },
});
