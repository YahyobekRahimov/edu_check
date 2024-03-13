import { configureStore } from "@reduxjs/toolkit";
import isDarkSlice from "./isDarkSlice";
import isModalOpen from "./isModalOpen";
import selectedNavSlice from "./selectedNavSlice";

const store = configureStore({
  reducer: {
    isDark: isDarkSlice,
    isModalOpen: isModalOpen,
    selectedNav: selectedNavSlice,
  },
});

store.subscribe(() => console.log(store.getState()));

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export default store;
