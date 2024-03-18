import { createSlice } from "@reduxjs/toolkit";

const initialState: {
  userData: any;
  addPaymentModal: {
    isOpen: boolean;
  };
  deductionModal: {
    isOpen: boolean;
  };
  SMSDrawer: { isOpen: boolean };
} = {
  userData: {},
  addPaymentModal: { isOpen: false },
  deductionModal: { isOpen: false },
  SMSDrawer: { isOpen: false },
};

const ModalSlice = createSlice({
  name: "Modal Slice",
  initialState,
  reducers: {
    setModalOpen: (state, { payload }: { payload: boolean }) => {
      state.addPaymentModal.isOpen = payload;
    },
    // state to keep the user whose balance is being increased
    setModalData: (state, { payload }: { payload: any }) => {
      state.userData = payload;
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
  setModalData,
  setDeductionModal,
  setModalOpen,
  setSMSDrawer,
} = ModalSlice.actions;

export default ModalSlice.reducer;
