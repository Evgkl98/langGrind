import { StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import landAppLogic from "../data/langAppLogic";


export default function BackButton({onPress, backButtonColor}) {
  const {buttons} = landAppLogic()

  return (
    <Pressable
      style={({pressed}) => pressed && styles.pressed}
      onPress={onPress}
      
    ><View style={styles.backButton}>
      <Ionicons name="chevron-back-outline" size={20} color={backButtonColor} />
      <Text style={[styles.buttonTitle, {color: backButtonColor}]}>{buttons.backButton}</Text></View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
    backButton: {
        flexDirection: "row",
        alignItems: "center",
        width: "auto",
        padding: 7,
        marginLeft: 10,
      },
      buttonTitle: {
        color: "#ffd700",
        fontSize: 20,
        fontFamily: "Inter-Regular",
      },
      pressed: {
        opacity: 0.3
      }
})

