import { Text, Pressable, StyleSheet, View } from "react-native";
import landAppLogic from "../data/langAppLogic";

export default function AuthButton({ title}) {
  const {buttons} = landAppLogic()
  return (
    <Pressable
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.button}>
        <Text
          style={{
            fontFamily: "Inter-Bold",
            fontSize: 20,
            color: "black",
            textAlign: "center"
          }}
        >
          {title}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffd700",
    borderColor: "black",
    borderWidth: 1.5,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 15
  },
  pressed: {
    opacity: 0.3,
  }
});
