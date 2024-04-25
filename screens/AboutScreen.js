import { Text, SafeAreaView, View, Pressable } from "react-native";
import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { MotiView } from "moti";
import CustomHeader from "../components/CustomHeader";
import landAppLogic from "../data/langAppLogic";
import { EvilIcons } from "@expo/vector-icons";
import * as WebBrowser from 'expo-web-browser';



export default function AboutScreen({ navigation }) {
  const { settingsText } = landAppLogic();

  function goBack() {
    navigation.navigate("SettingsScreen");
  }

  return (
    <>
      <StatusBar style="dark" />
      <SafeAreaView
        style={[
          styles.safeArea,
          { backgroundColor: styles.container.backgroundColor },
        ]}
      >
        <View style={styles.container}>
          <View style={{ flex: 1, paddingBottom: 5 }}>
            <CustomHeader
              onBack={goBack}
              buttonColor="black"
              //   headerTitle={settingsText.aboutSection}
            />
          </View>
          <View style={styles.content}>
            <Text
              style={{
                fontFamily: "Inter-Black",
                fontSize: 40,
                marginBottom: 15,
              }}
            >
              LangGrind
            </Text>
            <Text
              style={{
                fontFamily: "Inter-Regular",
                fontSize: 20,
                marginBottom: 20,
              }}
            >
              Version 1.0
            </Text>

            <Text
              style={{
                fontFamily: "Inter-Light",
                fontSize: 15,
                textAlign: "center",
                marginHorizontal: 40,
                marginBottom: 20,
              }}
            >
              An app created by person who is passionated about learning
              languages and loves programming
            </Text>

            <Pressable
              style={({ pressed }) => ({
                opacity: pressed ? 0.4 : 1,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 50,
              })}
              onPress={() => WebBrowser.openBrowserAsync("https://www.linkedin.com/in/evgkl/")}
            >
                
              <Text
                style={{
                  fontFamily: "Inter-Regular",
                  fontSize: 20,
                  textAlign: "center",
                }}
              >
                {"Find more "}
              </Text>
              <EvilIcons name="external-link" size={24} color="black" />
            </Pressable>

            <MotiView
              style={styles.cubic}
              from={{ scale: 0 }}
              animate={{
                rotate: [
                  "0deg",
                  "90deg",
                  "180deg",
                  "270deg",
                  "360deg",
                  "270deg",
                  "180deg",
                  "90deg",
                  "-360deg",
                ],
                scale: 1,
              }}
              transition={{
                rotate: {
                  duration: 1000,
                  type: "spring",
                  repeat: Infinity,
                  delay: 0,
                },
              }}
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  container: {
    flex: 1,
    backgroundColor: "#ffd700",
    paddingBottom: 40
  },
  content: {
    flex: 11,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,
  },
  cubic: {
    height: 80,
    width: 80,
    backgroundColor: "#0000FF",
    borderRadius: 8,
  },
});
