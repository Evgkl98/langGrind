
import { View, TextInput, StyleSheet, Text, Button } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function CardContent({ navigation }) {
  
  function onCancel() {
    navigation.navigate("CardGame");
  }


  return (
    <KeyboardAwareScrollView
      style={{ backgroundColor: styles.container.backgroundColor }}
      resetScrollToCoords={{ x: 0, y: 0 }}
    >
      <View style={styles.container}>
        <View style={styles.card}>
          <View
            style={{
              height: 250,
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              paddingLeft: 15,
              paddingRight: 18,
            }}
          >
            <Text
              style={{
                fontFamily: "Inter-Black",
                fontSize: 35,
                marginBottom: 15,
                textAlign: "center",
                marginHorizontal: 10,
              }}
            >
            </Text>
            <Text
              style={{
                fontFamily: "Inter-Light",
                fontSize: 25,
                textAlign: "center",
                marginHorizontal: 10,
              }}
            >
            </Text>
          </View>
          <TextInput
            style={[styles.inputStyle, { fontSize: 20, padding: 8 }]}
            autoCorrect={false}
            keyboardType="default"
            placeholder="Word"
            maxLength={40}
            multiline={true}
            textAlignVertical="top"
          />
          <TextInput
            style={[
              styles.inputStyle,
              { fontSize: 20, padding: 8 },
              { marginBottom: "10%" },
            ]}
            placeholder="Translation"
            autoCorrect={false}
            keyboardType="default"
            maxLength={40}
            multiline={true}
            textAlignVertical="top"
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              paddingBottom: 20,
            }}
          >
            <Button
              title="Cancel"
              color="black"
              onPress={onCancel}
            ></Button>
            <Button title="Confirm"></Button>
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0000FF",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    height: 500,
    marginTop: 70,
    width: "90%",
    backgroundColor: "#ffd700",
    borderRadius: 10,
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  inputStyle: {
    fontFamily: "Inter-Light",
    marginHorizontal: 20,
    marginVertical: 10,
    backgroundColor: "white",
    borderRadius: 8,
  },
  cancelButton: {},
  confirmButton: {},
});


