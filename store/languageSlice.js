import { createSlice } from "@reduxjs/toolkit";
import { Alert } from "react-native";


const appLanguageSlice = createSlice({
  name: "appLang",
  initialState: "English",
  reducers: {
    changeAppLanguage: (state, action) => {
      switch (action.payload){
        case "English":
        Alert.alert("App language was changed", "You've successfully changed your language to English")
        break
        case "Deutsch":
        Alert.alert("App-Sprache wurde geändert", "Die Anwendungssprache wurde auf Deutsch geändert")
        break
        case "Русский":
        Alert.alert("Смена языка", "Язык приложения был изменен на Русский")
        break
        case "Český":
        Alert.alert("Změna jazyku", "Jazyk aplikace byl změněn na Český")
        break
      }
        return action.payload
    },
    
  },
});

export default appLanguageSlice.reducer;
export const { changeAppLanguage } = appLanguageSlice.actions;