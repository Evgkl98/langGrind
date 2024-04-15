import { SafeAreaView, StyleSheet, View } from "react-native";
import { useDispatch } from "react-redux";
import CustomHeader from "../components/CustomHeader";
import AddButton from "../components/AddButton";
import { useSelector } from "react-redux";
import { removeCard } from "../store/myVocab";
import Card from "../components/Card";
import {
  SlideOutLeft,
  FadeIn,
  LinearTransition,
} from "react-native-reanimated";
import Animated from "react-native-reanimated";


function CardGame({ navigation }) {
  const words = useSelector((state) => state.cardReducer);

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




  console.log(words);

  return (
    <>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <CustomHeader
            onBack={goBack}
            onAddCard={addCard}
            twoButtons={words.length !== 0}
          />
          <View
            style={[
              styles.playground,
              words.length !== 0 && { paddingBottom: 0 },
            ]}
          >
            {words.length === 0 ? (
              <Animated.Text
                style={{ fontFamily: "Inter-Light", fontSize: 30, margin: 40 }}
              >
                No cards found
              </Animated.Text>
            ) : (
              <Animated.FlatList
                exiting={SlideOutLeft}
                data={words}
                keyExtractor={(item) => item.cardId}
                style={styles.flatListClass}
                // bounces={false}
                showsVerticalScrollIndicator={false}
                renderItem={(itemData) => {
                  return (
                    <Card
                      removeId={itemData.item.cardId}
                      cardId={itemData.item.cardId}
                      cardTranslation={itemData.item.translation}
                      cardWord={itemData.item.word}
                      cardStatus={itemData.item.cardStatus}
                      onDelete={() => {
                        onRemove(itemData.item.cardId);
                      }}
                    >
                      {itemData.item.word}
                    </Card>
                  );
                }}
              ></Animated.FlatList>
            )}
            {words.length === 0 && <AddButton onPress={addCard}></AddButton>}
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
    // backgroundColor: "red",
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
