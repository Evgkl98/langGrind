import { StyleSheet, View, Text } from "react-native";
import { MotiView } from "moti";

export default function Loading() {
  return (
    <View style={styles.container}>
      <View style={styles.background}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Loading</Text>
      </View>
      <MotiView
        style={styles.cubic}
        from={{ scale: 0 }}
        animate={{
          rotate: ["0deg", "90deg", "180deg", "270deg"],
          scale: 1,
        }}
        transition={{
          rotate: {
            duration: 1000,
            type: "spring",
            repeat: Infinity,
            delay: 0,
          },
        }}
      />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  background: {
    height: 150,
    width: 150,
    // backgroundColor: "rgba(255, 255, 255, 0.4)",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  textContainer: {
    opacity: 1,
  },
  text: {
    fontSize: 24,
    opacity: 1,
    fontFamily: "Inter-Bold",
    color: "rgba(255, 210, 0, 1)"
  },
  cubic: {
    height: 50,
    width: 50,
    backgroundColor: "#0000FF",
    marginTop: 10,
    borderRadius: 8,
  },
});
