import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  View,
  Text
} from "react-native";
import { useDispatch } from "react-redux";
import CustomHeader from "../components/CustomHeader";
import { changeAppLanguage } from "../store/languageSlice";
import { Dimensions } from "react-native";
import { MotiPressable } from "moti/interactions";
import landAppLogic from "../data/langAppLogic";



export default function SetLanguageScreen({ navigation }) {

  const { languagesText } = landAppLogic();


  function changeLanguage (lang) {
    setTimeout(() => dispatch(changeAppLanguage(lang)), 400);
  } 

  const appLanguages = [
    { id: "1", language: "English" },
    { id: "2", language: "Deutsch" },
    { id: "3", language: "Русский" },
    { id: "4", language: "Český" },
  ];


  const dispatch = useDispatch();

  const windowWidth = Dimensions.get("window").width;

  function goBack() {
    navigation.navigate("SettingsScreen");
  }

  return (
    <>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <CustomHeader
            onBack={goBack}
            headerTitle={languagesText.languageTitle}
          />
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
                  onPress={() => changeLanguage(itemData.item.language)}
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
    borderTopWidth: 1
  },
  langCard: {
    backgroundColor: "#0000FF",
    borderRadius: 20,
    marginTop: 20,
    padding: 15
  },
});
