import { configureStore } from "@reduxjs/toolkit";
import isDarkSlice from "./isDarkSlice";

const store = configureStore({
  reducer: {
    isDark: isDarkSlice,
  },
});

store.subscribe(() => console.log(store.getState()));

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export default store;
