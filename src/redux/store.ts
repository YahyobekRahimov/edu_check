import { configureStore } from "@reduxjs/toolkit";
import isDarkSlice from "./isDarkSlice";
import isModalOpen from "./isModalOpen";
import selectedNavSlice from "./selectedNavSlice";
import isPaymentModalOpenSlice from "./isPaymentModalOpenSlice";

const store = configureStore({
  reducer: {
    isDark: isDarkSlice,
    isModalOpen: isModalOpen,
    selectedNav: selectedNavSlice,
    isPaymentModalOpen: isPaymentModalOpenSlice,
  },
});

store.subscribe(() =>
  console.log(store.getState().isPaymentModalOpen)
);

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export default store;
