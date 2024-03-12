import { createSlice } from "@reduxjs/toolkit";

const initialState: boolean = false;


const isModalOpenSlice = createSlice({
  name: "isModalOpenSlice",
  initialState,
  reducers: {
    setIsModalOpen: (_, { payload }: { payload: boolean }) => payload,
  },
});

export const { setIsModalOpen } = isModalOpenSlice.actions;

export default isModalOpenSlice.reducer;
