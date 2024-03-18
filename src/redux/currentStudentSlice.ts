import { createSlice } from "@reduxjs/toolkit";

type initialStateType = {
  id: number | string;
  image: string;
  name: string;
  phoneNumber: string;
  birthDate: string;
  status: "paid" | "unpaid";
  balance: number;
  group: string;
  teacher: string;
};

const initialState: initialStateType = {
  id: 2,
  image: "",
  name: "",
  phoneNumber: "",
  birthDate: "",
  status: "paid",
  balance: 0,
  group: "",
  teacher: "",
};

const currentStudentSlice = createSlice({
  name: "current-student",
  initialState,
  reducers: {
    setCurrentStudentData: (_, { payload }: { payload: any }) => {
      return payload;
    },
  },
});

export const { setCurrentStudentData } = currentStudentSlice.actions;

export default currentStudentSlice.reducer;
