import { createSlice } from "@reduxjs/toolkit";

const appLanguageSlice = createSlice({
  name: "appLang",
  initialState: "English",
  reducers: {
    changeAppLanguage: (state, action) => {
        return action.payload
    }
  },
});

export default appLanguageSlice.reducer;
export const { changeAppLanguage } = appLanguageSlice.actions;