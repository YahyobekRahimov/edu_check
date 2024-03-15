import { createSlice } from "@reduxjs/toolkit";

const initialState: {
  addPaymentModal: {
    data: any;
    isOpen: boolean;
  };
  deductionModal: {
    data: any;
    isOpen: boolean;
  };
} = {
  addPaymentModal: { data: {}, isOpen: false },
  deductionModal: { data: {}, isOpen: false },
};

const isPaymentModalOpenSlice = createSlice({
  name: "Payment Modal Open Slice",
  initialState,
  reducers: {
    setPaymentModalOpen: (
      state,
      { payload }: { payload: boolean }
    ) => {
      state.addPaymentModal.isOpen = payload;
    },
    // state to keep the user whose balance is being increased
    setPaymentModalData: (state, { payload }: { payload: any }) => {
      state.addPaymentModal.data = payload;
    },
    setDeductionModal: (state, { payload }: { payload: boolean }) => {
      state.deductionModal.isOpen = payload;
    },
    // state to keep the user whose balance is being deducted
    setDeductionData: (state, { payload }: { payload: any }) => {
      state.deductionModal.data = payload;
    },
  },
});

export const {
  setPaymentModalOpen,
  setDeductionData,
  setDeductionModal,
  setPaymentModalData,
} = isPaymentModalOpenSlice.actions;

export default isPaymentModalOpenSlice.reducer;
