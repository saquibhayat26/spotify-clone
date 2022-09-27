import { configureStore } from "@reduxjs/toolkit";
import favMusicReducer from "../features/favMusicSlice";
import { musicApi } from "../services/musicApi";
import filterMusicReducer from "../features/filterMusicSlice";

export const store = configureStore({
  reducer: {
    filter: filterMusicReducer,
    music: favMusicReducer,
    [musicApi.reducerPath]: musicApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(musicApi.middleware),
});
