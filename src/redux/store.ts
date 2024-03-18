import { configureStore } from "@reduxjs/toolkit";
import isDarkSlice from "./isDarkSlice";
import isModalOpen from "./isModalOpen";
import selectedNavSlice from "./selectedNavSlice";
import ModalSlice from "./ModalSlice";
import currentStudentSlice from "./currentStudentSlice";

const store = configureStore({
  reducer: {
    isDark: isDarkSlice,
    isModalOpen: isModalOpen,
    selectedNav: selectedNavSlice,
    ModalSlice: ModalSlice,
    currentStudent: currentStudentSlice,
  },
});

store.subscribe(() => console.log(store.getState().ModalSlice));

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export default store;
