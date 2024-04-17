import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Alert,
} from "react-native";
import { useDispatch } from "react-redux";
import CustomHeader from "../components/CustomHeader";
import { changeAppLanguage } from "../store/languageSlice";
import { useSelector } from "react-redux";
import Card from "../components/Card";
import {
  SlideOutLeft,
  FadeIn,
  LinearTransition,
} from "react-native-reanimated";
import Animated from "react-native-reanimated";
import { APP_LANGUAGES } from "../data/AppLanguages";
import { Dimensions } from "react-native";
import { MotiPressable } from "moti/interactions";

export default function SetLanguageScreen({ navigation }) {
  const appLanguages = APP_LANGUAGES;

  const languageIs = useSelector((state) => state.languageReducer);

  console.log(languageIs);

  const dispatch = useDispatch();

  const windowWidth = Dimensions.get("window").width;

  function goBack() {
    navigation.navigate("SettingsScreen");
  }

  return (
    <>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <CustomHeader onBack={goBack} headerTitle={"Language"} />
          <View style={[styles.playground]}>
            <FlatList
              data={appLanguages}
              keyExtractor={(item) => item.id}
              scrollEnabled={false}
              renderItem={(itemData) => (
                <MotiPressable
                  style={[styles.langCard, { width: 0.9 * windowWidth }]}
                  from={{ scale: 1 }}
                  animate={({ pressed }) => {
                    "worklet";
                    return {
                      scale: pressed ? 0.85 : 1,
                    };
                  }}
                  onPress={() => {
                    setTimeout(() => {
                      Alert.alert(
                        "Notification",
                        `You've successfully changed the app language to ${itemData.item.language}`
                      );
                    }, 400);
                    setTimeout(() => {
                      dispatch(changeAppLanguage(itemData.item.language));
                    }, 800);
                  }}
                >
                  <Text
                    style={{
                      color: "#ffd700",
                      fontFamily: "Inter-Light",
                      fontSize: 23,
                    }}
                  >
                    {itemData.item.language}
                  </Text>
                </MotiPressable>
              )}
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#ffd700" },
  container: { flex: 1 },
  playground: {
    flex: 1,
    backgroundColor: "#ffd700",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: "30%",
    borderTopWidth: 1,
    // backgroundColor: "grey",
  },
  langCard: {
    backgroundColor: "#0000FF",
    borderRadius: 20,
    marginTop: 20,
    padding: 15,
  },
});
