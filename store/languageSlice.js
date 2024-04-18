import { createSlice } from "@reduxjs/toolkit";
import { Alert } from "react-native";
import landAppLogic from "../data/langAppLogic";

const appLanguageSlice = createSlice({
  name: "appLang",
  initialState: "English",
  reducers: {
    changeAppLanguage: (state, action) => {
      switch (action.payload){
        case "English":
        Alert.alert("Language changed", "You've successfully changed your language to English")
        break
        case "Deutsch":
        Alert.alert("Sprache geändert", "Die Anwendungssprache wurde auf Russisch geändert")
        break
        case "Russian":
        Alert.alert("Смена языка", "Язык приложения был изменен на Русский")
        break
        case "Czech":
        Alert.alert("Změna jazyku", "Jazyk aplikace byl změněn na Český")
        break
      }
        return action.payload
    }
  },
});

export default appLanguageSlice.reducer;
export const { changeAppLanguage } = appLanguageSlice.actions;