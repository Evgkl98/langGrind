import { Platform, SafeAreaView, StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import CustomHeader from "../components/CustomHeader";
import AddButton from "../components/AddButton";
import { changeCurrentAction } from "../store/myVocab";
import Card from "../components/Card";
import Animated, {
  SlideOutLeft,
  LinearTransition,
  Easing,
} from "react-native-reanimated";
import landAppLogic from "../data/langAppLogic";
import { useEffect, useState } from "react";
import { fetchCards, deleteCard } from "../data/database";


function CardGame({ navigation }) {
  const { gameText } = landAppLogic();

  const [cards, setCards] = useState([]);

  const currentStatus = useSelector((state) => state.cardReducer);

  function goBack() {
    navigation.navigate("CardGameStart");
  }
  function addCard() {
    navigation.navigate("AddCardModal", { isAdding: true });
  }
  const dispatch = useDispatch();

  // Fetching data from database:

  useEffect(() => {
    async function loadCards() {
      const dbCards = await fetchCards();
      setCards(dbCards);
    }
    loadCards();
  }, [currentStatus]);





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
                  itemLayoutAnimation={Platform.OS === "ios" ? LinearTransition.springify() : null}
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
                        cardId={itemData.item.id}
                        cardTranslation={itemData.item.translation}
                        cardWord={itemData.item.word}
                        cardStatus={itemData.item.cardStatus}
                        onDelete={() => {
                          deleteCard(itemData.item.id);
                          dispatch(
                            changeCurrentAction(
                              `deleting item: ${itemData.item.id}`
                            )
                          );
                        }}
                      >
                        {itemData.item.word}
                      </Card>
                    );
                  }}
                ></Animated.FlatList>
              </>
            )}
            {cards.length === 0 && <AddButton onPress={addCard}></AddButton>}
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
    width: "100%"
  },
});

export default CardGame;
