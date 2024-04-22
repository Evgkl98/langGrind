import StartScreen from "./screens/StartScreen";
import ChooseExercise from "./screens/ChooseExercise";
import SettingsScreen from "./screens/SettingsScreen";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CardGameStart from "./screens/CardGameStart";
import CardGame from "./screens/CardGame";
import AddCardModal from "./screens/AddCardModal";
import { Provider } from "react-redux";
import { store } from "./store/store";
import CardContent from "./screens/CardContent";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import SetLanguageScreen from "./screens/SetLanguageScreen";
import AboutScreen from "./screens/AboutScreen";
import FeedbackScreen from "./screens/FeedbackScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <StatusBar style="dark" />
        <Provider store={store}>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="StartScreen"
              screenOptions={{
                // animationDuration: "300",
                headerShown: false,
              }}
            >
              <Stack.Screen
                name="StartScreen"
                component={StartScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ChooseExercise"
                component={ChooseExercise}
                options={{ gestureEnabled: false, animation: "fade" }}
              />
              <Stack.Screen
                name="CardGameStart"
                component={CardGameStart}
                options={{ gestureEnabled: false, animation: "default" }}
              />
              <Stack.Screen
                name="CardGame"
                component={CardGame}
                options={{ gestureEnabled: false, animation: "fade" }}
              />
              <Stack.Screen
                name="AddCardModal"
                component={AddCardModal}
                options={{
                  gestureEnabled: true,
                  presentation: "modal",
                  animation: "default",
                }}
              />
              <Stack.Screen
                name="SettingsScreen"
                component={SettingsScreen}
                options={{
                  gestureEnabled: false,
                  animation: "default",
                }}
              />
              <Stack.Screen
                name="SetLanguageScreen"
                component={SetLanguageScreen}
                options={{
                  gestureEnabled: false,
                  animation: "default",
                }}
              />
              <Stack.Screen
                name="AboutScreen"
                component={AboutScreen}
                options={{
                  gestureEnabled: false,
                  animation: "default",
                }}
              />
              <Stack.Screen
                name="FeedbackScreen"
                component={FeedbackScreen}
                options={{
                  gestureEnabled: true,
                  presentation: "modal",
                  animation: "default",
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </Provider>
      </GestureHandlerRootView>
    </>
  );
}
