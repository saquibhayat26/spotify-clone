import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  myMusic: [],
};

export const favMusicSlice = createSlice({
  name: "music",
  initialState,
  reducers: {
    getFavMusic: (state, action) => {
      const index = state.myMusic.findIndex(
        (album) => album.id === action.payload.id
      );
      if (index === -1) state.myMusic.push(action.payload);
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
