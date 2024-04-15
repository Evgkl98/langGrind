import { configureStore } from "@reduxjs/toolkit";
import vocabReducer from "./myVocab"

export const store = configureStore({
    reducer: {cardReducer: vocabReducer}
})