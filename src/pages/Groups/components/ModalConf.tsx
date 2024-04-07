import { Modal } from "antd";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../hooks/redux-hooks";
import { setOpenConfirm } from "../../../redux/ModalSlice";

function ModalConf() {
  const dispatch = useAppDispatch();
  const groupString = useAppSelector(
    (state) => state.ModalSlice.confirm.isGroup
  );
  const isOpen = useAppSelector(
    (state) => state.ModalSlice.confirm.isOpen
  );

  const handleOk = () => {};

  const handleCancel = () => {
    dispatch(setOpenConfirm(false));
  };

  return (
    <>
      <Modal
        open={isOpen}
        title={groupString}
        onOk={handleOk}
        onCancel={handleCancel}
        cancelText={"Yo'q"}
        okText={"Ha"}
        footer={(_, { OkBtn, CancelBtn }) => (
          <>
            <CancelBtn />
            <OkBtn />
          </>
        )}
      >
        <p>Haqiqatdan ham o'chirmoqchimisiz...</p>
      </Modal>
    </>
  );
}

export default ModalConf;
