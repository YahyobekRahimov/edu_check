import { Button, Dropdown, MenuProps, Table, TableProps } from "antd";
import GroupsHeader from "./components/GroupsHeader";
import { DataGroups } from "../../types/types";

import MobileTableGroups from "./components/MobileTableGroups";
import { NavigateFunction, useNavigate } from "react-router-dom";

export default function Groups() {
  const navigate: NavigateFunction = useNavigate();
  function handleChangePage(record: DataGroups) {
    console.log(record);
    navigate("singleGroup");
  }

  const items: MenuProps["items"] = [
    {
      key: 1,
      label: (
        <button
          onClick={(e) => {
            e.stopPropagation();
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

  const columns: TableProps<DataGroups>["columns"] = [
    {
      title: "Guruh",
      dataIndex: "guruh",
      key: "guruh",
    },
    {
      title: "Kurslar",
      dataIndex: "kurslar",
      key: "kurslar",
    },
    {
      title: "O'qituvchi",
      dataIndex: "teacher",
      key: "o'qituvchi",
    },
    {
      title: "O'tilgan muddati",
      dataIndex: "pastDate",
      key: "o'tilgan muddati",
    },
    {
      title: "Xonalar",
      dataIndex: "rooms",
      key: "xonalar",
    },
    {
      title: "Talabalar soni",
      dataIndex: "amoundStudent",
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

  const data: any = [
    {
      key: 1,
      guruh: "01-a",
      kurslar: "inglis-tili",
      teacher: "Teshaboyev A",
      pastDate: "09-09-2023",
      rooms: "4/203",
      amoundStudent: 18,
      actions: <Button type="primary">...</Button>,
    },
    {
      key: 2,
      guruh: "01-a",
      kurslar: "inglis-tili",
      teacher: "Teshaboyev A",
      pastDate: "09-09-2023",
      rooms: "4/203",
      amoundStudent: 18,
      actions: <Button type="primary">...</Button>,
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
    </>
  );
}
