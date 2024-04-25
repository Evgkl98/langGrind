import { createSlice } from "@reduxjs/toolkit";
import { insertCard } from "../data/database";

const vocabSlice =  createSlice({
  name: "vocabs",
  initialState: [], //{cardId: "", word: "", translation: "", cardStatus: false}
  reducers: {
    addCard: (state, action) => {
      state.push(action.payload);
      console.log(action.payload);
      // insertCard(action.payload);
    },
    removeCard: (state, action) => {
      return state.filter((card) => card.cardId !== action.payload);
    },
    editCard: (state, action) => {
      const { cardId, updatedWord, updatedTranslation } = action.payload;
      const cardIndex = state.findIndex((card) => card.cardId === cardId);
      if (cardIndex !== -1) {
        state[cardIndex].word = updatedWord;
        state[cardIndex].translation = updatedTranslation;
      }
    },
    changeCardStatus: (state, action) => {
      const { cardId, cardStatus } = action.payload;
      const certainCard = state.find((card) => card.cardId === cardId);
      if (certainCard) {
        certainCard.cardStatus = cardStatus;
      }
    }
  },
});

export default vocabSlice.reducer;
export const { addCard, removeCard, editCard, changeCardStatus } = vocabSlice.actions;
