import { createSlice } from "@reduxjs/toolkit";

const initialState: {
  paymentData: any;
  addPaymentModal: {
    isOpen: boolean;
  };
  deductionModal: {
    isOpen: boolean;
  };
  SMSDrawer: { isOpen: boolean };
} = {
  paymentData: {},
  addPaymentModal: { isOpen: false },
  deductionModal: { isOpen: false },
  SMSDrawer: { isOpen: false },
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
      state.paymentData = payload;
    },
    setDeductionModal: (state, { payload }: { payload: boolean }) => {
      state.deductionModal.isOpen = payload;
    },
    setSMSDrawer: (state, { payload }: { payload: boolean }) => {
      state.SMSDrawer.isOpen = payload;
    },
  },
});

export const {
  setPaymentModalOpen,
  setDeductionModal,
  setPaymentModalData,
  setSMSDrawer,
} = isPaymentModalOpenSlice.actions;

export default isPaymentModalOpenSlice.reducer;
