import { createSlice } from "@reduxjs/toolkit";

const initialState: boolean = false;


const isDarkSlice = createSlice({
  name: "IsDarkSlice",
  initialState,
  reducers: {
    setIsDark: (_, { payload }: { payload: boolean }) => payload,
  },
});

export const { setIsDark } = isDarkSlice.actions;

export default isDarkSlice.reducer;
