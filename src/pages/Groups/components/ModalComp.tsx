import { Modal } from "antd";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../hooks/redux-hooks";
import { setIsModalOpen } from "../../../redux/isModalOpen";
import FormComp from "./FormComp";
import { setModalData } from "../../../redux/ModalSlice";

function ModalComp() {
  function openModal() {
    dispatch(setModalData({}))
    dispatch(setIsModalOpen(!isModalOpen));
  }
  const dispatch = useAppDispatch();
  const modalData = useAppSelector(state => state.ModalSlice.userData)
  const isModalOpen = useAppSelector((state) => state.isModalOpen);
  return (
    <Modal
      className=""
      title={modalData.name ? "Guruh tahrirlash" : "Guruh qo'shish"}
      open={isModalOpen}
      //   onOk={openModal}
      onCancel={openModal}
      okText="qo'shish" // Set to an empty string
      cancelText="bekor qilish" // Set to an empty string
    >
      <FormComp />
    </Modal>
  );
}

export default ModalComp;
