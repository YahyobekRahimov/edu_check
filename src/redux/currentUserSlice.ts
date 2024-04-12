import { createSlice } from "@reduxjs/toolkit";

type initialType = {
  id: number;
  firstName: string;
  lastName: string;
  birthDate: string;
  balance: number;
  image: string;
};

// if the id is -1, that means the user is not logged in.
const initialState: initialType = {
  id: -1,
  firstName: "John",
  lastName: "Doe",
  birthDate: "2000-01-27",
  balance: 1000,
  image: "",
};

const currentUserSlice = createSlice({
  name: "current user slice",
  initialState,
  reducers: {
    setCurrentUserImage: (
      state,
      { payload }: { payload: string }
    ) => {
      state.image = payload;
    },
    setCurrentUser: (_, { payload }: { payload: initialType }) =>
      payload,
  },
});

export const { setCurrentUserImage, setCurrentUser } =
  currentUserSlice.actions;

export default currentUserSlice.reducer;
