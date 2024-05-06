import { StyleSheet, Text, Pressable, View, Platform } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { useNavigation } from "@react-navigation/native";
import Animated, {
  SlideInDown,
  SlideOutLeft,
  ZoomIn,
} from "react-native-reanimated";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { useRef } from "react";
import { Easing } from "react-native-reanimated";
import landAppLogic from "../data/langAppLogic";

export default function Card({
  children,
  cardId,
  cardWord,
  cardTranslation,
  onDelete,
  cardStatus,
}) {
  const { buttons } = landAppLogic();
  const navigation = useNavigation();
  const swipeRef = useRef();


  function playGame() {
    navigation.navigate("AddCardModal", {
      isPlaying: true,
      cardId,
      cardWord,
      cardTranslation,
    });
  }

  function editCard() {
    navigation.navigate("AddCardModal", {
      cardId,
      cardWord,
      cardTranslation,
      isEditing: true,
    });
  }

  const deleteBox = () => {
    return (
      <Pressable style={[styles.box, { marginRight: 25 }]} onPress={onDelete}>
        <Text
          style={{
            fontFamily: "Inter-Light",
            fontSize: 20,
            color: "red",
          }}
        >
          {buttons.deleteButton}
        </Text>
      </Pressable>
    );
  };

  const editBox = () => {
    return (
      <Pressable
        style={[styles.box, { marginLeft: 25 }]}
        onPress={() => {
          editCard(cardId, cardWord, cardTranslation);

          setTimeout(() => swipeRef.current.close(), 1000);
        }}
      >
        <Text
          style={{
            fontFamily: "Inter-Light",
            fontSize: 20,
            color: "black",
          }}
        >
          {buttons.editButton}
        </Text>
      </Pressable>
    );
  };

  return (
    <Animated.View
      entering={
        Platform.OS === "ios"
          ? SlideInDown.easing(Easing.ease).springify().mass(0.4)
          : ZoomIn.easing(Easing.ease).springify().mass(0.4)
      }
      exiting={
        Platform.OS === "ios"
          ? SlideOutLeft.duration(300).easing(Easing.ease).springify()
          : null
      }
    >
      <Swipeable
        renderRightActions={deleteBox}
        renderLeftActions={editBox}
        overshootLeft={false}
        overshootRight={false}
        ref={swipeRef}
      >
        <Pressable onPress={playGame}>
          <View style={styles.cardItem}>
            <View style={{ width: "87%" }}>
              <Text
                style={{
                  fontFamily: "Inter-Light",
                  fontSize: 23,
                  margin: 19,
                  color: "#ffd700",
                  textAlign: "auto",
                }}
              >
                {children}
              </Text>
            </View>
            <View style={{ width: "13%" }}>
              {cardStatus === "correct" && (
                <FontAwesome name="check-circle" size={30} color="#4CBB17" />
              )}
              {cardStatus === "wrong" && (
                <MaterialIcons name="cancel" size={30} color="#ff3800" />
              )}
            </View>
          </View>
        </Pressable>
      </Swipeable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  cardItem: {
    backgroundColor: "#0000FF",
    borderRadius: 20,
    marginVertical: 10,
    width: "90%",
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  box: {
    justifyContent: "center",
    alignItems: "center",
  },
  pressed: {
    opacity: 0.5,
  },
});
