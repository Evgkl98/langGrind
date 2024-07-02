
import { StyleSheet, Pressable, Text, View } from "react-native";

export default function MenuItem(props) {
  return (
    <Pressable
      style={({ pressed }) => pressed && styles.pressed}
      onPress={props.setLang}
    >
        <Text style={[styles.inputStyle, { fontSize: 20 }]}>
          {props.itemText}
        </Text>
        {<View style={styles.line}></View>}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
  },
  inputStyle: {
    fontFamily: "Inter-Light",
    borderColor: "black",
    paddingVertical: 8,
    paddingLeft: 6,
    minWidth: "100%"
  },
  pressed: {
    opacity: 0.3
  },
  line: {
    width: "100%",
    height: 1,
    backgroundColor: "black",
    opacity: 0.2
  }
});
