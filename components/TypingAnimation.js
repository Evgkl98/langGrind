import { Text } from "react-native";
import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";

export default function TypingAnimation({ text, fontSize, fontFamily }) {
  const [textState, setTextState] = useState("");
  const [opacity, setOpacity] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      let textTimeout;
      for (let i = 0; i < text.length; i++) {
        textTimeout = setTimeout(() => {
          setTextState((prevState) => prevState + text.charAt(i));
        }, 50 * i);
      }
      return () => clearTimeout(textTimeout);
    }, 1000);
  }, [text]);

  useEffect(() => {
    let opacityInterval = setInterval(() => {
      setOpacity((prevOpacity) => (prevOpacity === 0 ? 1 : 0));
    }, 700);
    return () => clearInterval(opacityInterval);
  }, [opacity]);

  return (
    <>
      <Text style={styles.text}>
        {textState}
        <Text style={[styles.text, { opacity: opacity }, { fontSize: 25 }]}>
          |
        </Text>
      </Text>
    </>
  ); // save | as new component
}

const styles = StyleSheet.create({
  text: {
    color: "#ffd700",
    marginTop: 20,
    fontSize: 30,
    fontFamily: "Inter-ExtraLight",
  },
});
