import { createSlice } from "@reduxjs/toolkit";

const initialState: {
  userData: any;
  addPaymentModal: {
    isOpen: boolean;
  };
  deductionModal: {
    isOpen: boolean;
  };
  confirm: { isGroup: string; isOpen: boolean };
  SMSDrawer: { isOpen: boolean };
  studentEditModal: { isOpen: boolean };
  changePasswordModal: { isOpen: boolean };
  changeInfoModal: { isOpen: boolean };
} = {
  userData: {},
  confirm: { isGroup: "", isOpen: false },
  addPaymentModal: { isOpen: false },
  deductionModal: { isOpen: false },
  SMSDrawer: { isOpen: false },
  studentEditModal: { isOpen: false },
  changePasswordModal: { isOpen: false },
  changeInfoModal: { isOpen: false },
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
    setStudentEditModal: (
      state,
      { payload }: { payload: boolean }
    ) => {
      state.studentEditModal.isOpen = payload;
    },
    setOpenConfirm: (state, action: { payload: any }) => {
      state.confirm.isOpen = action.payload;
    },
    setGroupConfirm: (state, action: { payload: any }) => {
      state.confirm.isGroup = action.payload;
    },
    setChangePasswordModal: (
      state,
      { payload }: { payload: boolean }
    ) => {
      state.changePasswordModal.isOpen = payload;
    },
    setChangeInfoModal: (
      state,
      { payload }: { payload: boolean }
    ) => {
      state.changeInfoModal.isOpen = payload;
    },
  },
});

export const {
  setModalData,
  setDeductionModal,
  setModalOpen,
  setSMSDrawer,
  setStudentEditModal,
  setOpenConfirm,
  setGroupConfirm,
  setChangePasswordModal,
  setChangeInfoModal,
} = ModalSlice.actions;

export default ModalSlice.reducer;
