import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import BackButton from "./BackButton";
import AddButton from "./AddButton";
import { Dimensions } from "react-native";
import { Platform } from "react-native";


function CustomHeader({
  onBack,
  buttonColor,
  onAddCard,
  twoButtons,
  headerTitle,
}) {
  const windowWidth = Dimensions.get("window").width;
  return (
    <View
      style={[
        styles.container,
        twoButtons && { justifyContent: "space-between" },
        Platform.OS === "android" && { paddingTop: 10 },
      ]}
    >
      <BackButton onPress={onBack} backButtonColor={buttonColor} />
      {headerTitle && (
        <View style={[styles.headerBox, { width: windowWidth }]}>
          <Text
            style={{
              fontSize: 20,
              fontFamily: "Inter-Regular",
              textDecorationLine: "underline",
            }}
          >
            {headerTitle}
          </Text>
        </View>
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
  headerBox: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "center",
    zIndex: -1,
  },
});

export default CustomHeader;
