import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filterData: "",
};

export const filterMusicSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filterMusic: (state, action) => {
      state.filterData = action.payload;
    },
  },
});

export const { filterMusic } = filterMusicSlice.actions;

export default filterMusicSlice.reducer;
