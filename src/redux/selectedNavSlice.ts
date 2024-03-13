import { createSlice } from "@reduxjs/toolkit";

const initialState: string | number | null = "1";

const selectedNavSlice = createSlice({
  name: "Selected Nav Slice",
  initialState,
  reducers: {
    setSelectedNav: (_, { payload }: { payload: any }) => {
      return payload;
    },
  },
});

export const { setSelectedNav } = selectedNavSlice.actions;

export default selectedNavSlice.reducer;
