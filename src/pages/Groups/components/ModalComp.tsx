import { Modal } from "antd";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../hooks/redux-hooks";
import { setIsModalOpen } from "../../../redux/isModalOpen";
import FormComp from "./FormComp";

function ModalComp() {
  function openModal() {
    dispatch(setIsModalOpen(!isModalOpen));
  }
  const dispatch = useAppDispatch();
  const isModalOpen = useAppSelector((state) => state.isModalOpen);
  return (
    <Modal
      className=""
      title="Guruh qo'shish"
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
