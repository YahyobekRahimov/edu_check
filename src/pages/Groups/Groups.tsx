import { Button, Dropdown, MenuProps, Table, TableProps } from "antd";
import GroupsHeader from "./components/GroupsHeader";
import { DataGroups } from "../../types/types";

import MobileTableGroups from "./components/MobileTableGroups";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/redux-hooks";
import { setSMSDrawer } from "../../redux/ModalSlice";
import SMSDrawer from "../../components/SMSDrawer/SMSDrawer";
import data from "../../data/groups.json"
export default function Groups() {
  const navigate: NavigateFunction = useNavigate();
  const dispatch = useAppDispatch()
  function handleChangePage(record: DataGroups) {
   
   
    navigate(`${record.id}`);
  }

  const items: MenuProps["items"] = [
    {
      key: 1,
      label: (
        <button
          onClick={(e) => {
            e.stopPropagation();
            // dispatch(setStudentEditModal(true))
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
            dispatch(setSMSDrawer(true))
            
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
          }}
          className="font-semibold w-full text-start tracking-wide py-[5px] px-3"
        >
          O'chirish
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
      render: () => (
        <Dropdown
          
          trigger={["click"]}
          menu={{ items }}
          placement="bottomLeft"
        >
          <Button
            onClick={(e) => {
              e.stopPropagation();
            }}
            type="primary"
          >
            ...
          </Button>
        </Dropdown>
      ),
    },
  ];


  return (
    <>
      <div className="bg-[var(--dark-backround)] w-full">
        <GroupsHeader />
        <Table
          onRow={(record, _) => ({
            onClick: () => handleChangePage(record),
          })}
          className=" hidden md:block  w-full cursor-pointer"
          columns={columns}
          dataSource={data}
          pagination={false}
        />
        <MobileTableGroups dataSource={data} />
      </div>
      <SMSDrawer/>
    </>
  );
}
