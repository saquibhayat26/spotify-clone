import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  myMusic: [],
};

export const favMusicSlice = createSlice({
  name: "music",
  initialState,
  reducers: {
    getFavMusic: (state = initialState, action) => {
      state.myMusic.push(action.payload);
      console.log(state.myMusic.length);
    },
    removeFavMusic: (state, action) => {
      state.myMusic = state.myMusic.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { getFavMusic, removeFavMusic } = favMusicSlice.actions;

export default favMusicSlice.reducer;
