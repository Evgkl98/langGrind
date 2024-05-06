import { createSlice } from "@reduxjs/toolkit";

const vocabSlice =  createSlice({
  name: "vocabs",
  initialState: "",
  reducers: {
    changeCurrentAction: (state, action) => {
      return action.payload
    } 
  },
});

export default vocabSlice.reducer;
export const { changeCurrentAction } = vocabSlice.actions;
