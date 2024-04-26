import { Platform, SafeAreaView, StyleSheet, View } from "react-native";
import { useDispatch } from "react-redux";
import CustomHeader from "../components/CustomHeader";
import AddButton from "../components/AddButton";
import { useSelector } from "react-redux";
import { removeCard } from "../store/myVocab";
import Card from "../components/Card";
import {
  SlideOutLeft,
  LinearTransition,
  Easing,
} from "react-native-reanimated";
import Animated from "react-native-reanimated";
import landAppLogic from "../data/langAppLogic";
import { useEffect, useState } from "react";
import { fetchCards } from "../data/database";
import { useIsFocused } from "@react-navigation/native";
import { deleteCard } from "../data/database";

function CardGame({ navigation }) {
  const { gameText } = landAppLogic();
  const words = useSelector((state) => state.cardReducer);
  const [cards, setCards] = useState([]);

  const isFocused = useIsFocused();

  const animateItems =
    Platform.OS === "ios" ? LinearTransition.springify() : null;

  function goBack() {
    navigation.navigate("CardGameStart");
  }
  function addCard() {
    navigation.navigate("AddCardModal", { isAdding: true });
  }
  const dispatch = useDispatch();

  const onRemove = (cardId) => {
    dispatch(removeCard(cardId));
  };

  useEffect(() => {
    async function loadCards() {
      const dbCards = await fetchCards();
      setCards(dbCards);
      console.log(dbCards);
    }
    loadCards();
  }, [words]);

  return (
    <>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <CustomHeader
            onBack={goBack}
            onAddCard={addCard}
            twoButtons={cards.length !== 0}
          />
          <View
            style={[
              styles.playground,
              cards.length !== 0 && { paddingBottom: 0 },
            ]}
          >
            {cards.length === 0 ? (
              <Animated.Text
                style={{
                  fontFamily: "Inter-Light",
                  fontSize: 30,
                  margin: 40,
                  textAlign: "center",
                }}
              >
                {gameText.noCards}
              </Animated.Text>
            ) : (
              <>
                <Animated.FlatList
                  itemLayoutAnimation={animateItems}
                  exiting={SlideOutLeft.duration(300)
                    .easing(Easing.ease)
                    .springify()
                    .mass(0.4)}
                  data={cards}
                  keyExtractor={(item) => item.id}
                  style={styles.flatListClass}
                  showsVerticalScrollIndicator={false}
                  renderItem={(itemData) => {
                    return (
                      <Card
                        removeId={itemData.item.cardId}
                        cardId={itemData.item.cardId}
                        cardDbId={itemData.item.id}
                        cardTranslation={itemData.item.translation}
                        cardWord={itemData.item.word}
                        cardStatus={itemData.item.cardStatus}
                        onDelete={() => {
                          deleteCard(itemData.item.id);
                          onRemove(itemData.item.cardId);
                        }}
                      >
                        {itemData.item.word}
                      </Card>
                    );
                  }}
                ></Animated.FlatList>
                {/* <AntDesign
                  name="infocirlceo"
                  size={40}
                  color="black"
                  style={{
                    opacity: 0.5,
                    alignSelf: "flex-end",
                    zIndex: 50,
                    position: "absolute",
                    top: 510,
                    right: 15
                  }}
                /> */}
              </>
            )}
            {cards.length === 0 && <AddButton onPress={addCard}></AddButton>}
            {/* {words.length === 0 && <AddButton onPress={addCard}></AddButton>} */}
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#ffd700" },
  container: { flex: 1, backgroundColor: "#ffd700" },
  playground: {
    flex: 1,
    backgroundColor: "#ffd700",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: "30%",
  },
  flatListClass: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    marginBottom: 20,
    width: "100%",
  },
});

export default CardGame;
