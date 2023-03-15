import { configureStore } from "@reduxjs/toolkit";

// import { shazamCoreApi } from "./services/shazamCore";
import { novusApi } from "./services/shazamCore";
import playerReducer from "./features/playerSlice";

export const store = configureStore({
  reducer: {
    [novusApi.reducerPath]: novusApi.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(novusApi.middleware),
});
