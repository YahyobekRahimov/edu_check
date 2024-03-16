import { Button, Tooltip } from "antd";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../hooks/redux-hooks";
import { setIsModalOpen } from "../../../redux/isModalOpen";
import { UsergroupAddOutlined } from "@ant-design/icons";
import ModalComp from "./ModalComp";

function GroupsHeader() {
  const dispatch = useAppDispatch();
  const isModalOpen = useAppSelector((state) => state.isModalOpen);
  function openModal() {
    dispatch(setIsModalOpen(!isModalOpen));
  }
  return (
    <>
      <div className="flex items-center justify-between  px-4 py-5  border-b">
        <div className=" text-[25px] md:text-[3.2rem] font-semibold">
          Guruhlar
        </div>
        <div className="px-4">
          <Tooltip title={"Guruh qo'shish"}>
            <Button
              onClick={openModal}
              className="px-2"
              type="primary"
            >
              <UsergroupAddOutlined style={{ fontSize: 20 }} />
            </Button>
          </Tooltip>
        </div>
      </div>
      <ModalComp />
    </>
  );
}

export default GroupsHeader;
