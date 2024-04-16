import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import BackButton from "./BackButton";
import AddButton from "./AddButton";

function CustomHeader({
  onBack,
  buttonColor,
  onAddCard,
  twoButtons,
  headerTitle,
}) {

  return (
    <View
      style={[
        styles.container,
        twoButtons && { justifyContent: "space-between" },
      ]}
    >
      <BackButton onPress={onBack} backButtonColor={buttonColor} />
      {headerTitle && (
        <Text
          style={{
            fontSize: 23,
            fontFamily: "Inter-Light",
            textDecorationLine: "underline",
            marginLeft: "15%",
            textAlign: "center"
          }}
        >
          {headerTitle}
        </Text>
      )}
      {twoButtons && <AddButton onPress={onAddCard} withoutBorder={true} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    minHeight: "9%",
  },
});

export default CustomHeader;
