import { configureStore } from "@reduxjs/toolkit";
import vocabReducer from "./myVocab";
import langReducer from "./languageSlice";

export const store = configureStore({
  reducer: { cardReducer: vocabReducer, languageReducer: langReducer },
});
