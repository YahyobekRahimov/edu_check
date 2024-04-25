import { Button, Dropdown, MenuProps, Table, TableProps } from "antd";
import { DataGroups } from "../../types/types";

import MobileTableGroups from "./components/MobileTableGroups";
import { NavigateFunction, useNavigate } from "react-router-dom";
import {
  useAppDispatch,
  useAppSelector,
} from "../../hooks/redux-hooks";
import {
  setGroupConfirm,
  setModalData,
  setOpenConfirm,
  setSMSDrawer,
} from "../../redux/ModalSlice";
import SMSDrawer from "../../components/SMSDrawer/SMSDrawer";
import data from "../../data/groups.json";
import { useState } from "react";
import ModalConf from "./components/ModalConf";
import { setIsModalOpen } from "../../redux/isModalOpen";
export default function OpenGroups() {
  const navigate: NavigateFunction = useNavigate();
  const dispatch = useAppDispatch();
  // @ts-ignore
  const [dataJs, setDataJs] = useState<DataGroups[]>([...data]);

  const modalData: DataGroups = useAppSelector(
    (state) => state.ModalSlice.userData
  );

  function handleChangePage(record: DataGroups) {
    navigate(`${record.id}`);
  }
  const handleFilter = () => {
    dispatch(setGroupConfirm(modalData.name));
    dispatch(setOpenConfirm(true));
    // const newData = dataJs.filter((d) => d.id !== modalData.id);
    // setDataJs(newData);
  };
  function handleUpdate() {
    dispatch(setGroupConfirm(modalData.name));
    dispatch(setIsModalOpen(true));
  }

  const items: MenuProps["items"] = [
    {
      key: 1,
      label: (
        <button
          onClick={(e) => {
            e.stopPropagation();
<<<<<<< HEAD
<<<<<<< HEAD
            handleUpdate();
=======
            dispatch(setGroupConfirm(modalData.name));
            dispatch(setOpenConfirm(true));
>>>>>>> 653ed60 (a lot of minor changes)
=======
            dispatch(setGroupConfirm(modalData.name));
            dispatch(setOpenConfirm(true));
=======
            handleUpdate();
>>>>>>> d3f5f80 (handleUpdate modal)
>>>>>>> 9ba4a2b (handleUpdate modal)
          }}
          className="font-semibold w-full text-start tracking-wide py-[5px] px-3"
        >
          Tahrirlash
        </button>
      ),
      style: {
        padding: 0,
      },
    },
    {
      key: 4,
      label: (
        <button
          onClick={(e) => {
            e.stopPropagation();
            dispatch(setSMSDrawer(true));
          }}
          className="font-semibold w-full text-start tracking-wide py-[5px] px-3"
        >
          SMS
        </button>
      ),
      style: { padding: 0 },
    },
    {
      key: 3,
      type: "divider",
    },
    {
      key: 2,
      label: (
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleFilter();
          }}
          className="font-semibold w-full text-start tracking-wide py-[5px] px-3"
        >
          Yopish
        </button>
      ),
      danger: true,
      style: {
        padding: 0,
      },
    },
  ];

  const columns: TableProps<any>["columns"] = [
    {
      title: "Guruh",
      dataIndex: "name",
      key: "guruh",
    },
    {
      title: "Kurslar",
      dataIndex: "course",
      key: "kurslar",
    },
    {
      title: "O'qituvchi",
      dataIndex: "teacher",
      key: "o'qituvchi",
    },
    {
      title: "Ochilgan muddati",
      dataIndex: "opened",
      key: "ochilgan muddati",
    },
    {
      title: "Xonalar",
      dataIndex: "rooms",
      key: "xonalar",
    },
    {
      title: "Talabalar soni",
      dataIndex: "students",
      key: "talabalar soni",
    },
    {
      title: "Amallar",
      dataIndex: "actions",
      key: "actions",
      render: (_, record: DataGroups) => (
        <>
          <Dropdown
            trigger={["click"]}
            menu={{ items }}
            placement="bottomLeft"
          >
            <Button
              onClick={(e) => {
                e.stopPropagation();
                dispatch(setModalData(record));
              }}
              type="primary"
              className="px-8"
            >
              ...
            </Button>
          </Dropdown>
        </>
      ),
    },
  ];

  return (
    <>
      <div>
        <Table
          onRow={(record, _) => ({
            onClick: () => handleChangePage(record),
          })}
          className="hidden md:block w-full cursor-pointer custom-table-top-position"
          columns={columns}
          dataSource={dataJs}
          pagination={false}
          sticky={true}
        />
        <MobileTableGroups dataSource={dataJs} />
      </div>
      <SMSDrawer />
      <ModalConf />
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> ec4ab31 (handleUpdate modal)
<<<<<<< HEAD
      <ModalConf />
=======
>>>>>>> 653ed60 (a lot of minor changes)
<<<<<<< HEAD
>>>>>>> 224dfa5 (a lot of minor changes)
=======
=======
=======
      <ModalConf />
>>>>>>> d3f5f80 (handleUpdate modal)
>>>>>>> 9ba4a2b (handleUpdate modal)
>>>>>>> ec4ab31 (handleUpdate modal)
    </>
  );
}
