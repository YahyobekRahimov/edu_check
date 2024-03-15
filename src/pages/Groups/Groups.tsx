import { Button, Dropdown, MenuProps, Table, TableProps } from "antd";
import GroupsHeader from "./components/GroupsHeader";
import { DataGroups } from "../../types/types";

import MobileTableGroups from "./components/MobileTableGroups";

export default function Groups() {
  const items: MenuProps["items"] = [
    {
      key: 1,
      label: (
        <button className="font-semibold tracking-wide text-base">
          Tahrirlash
        </button>
      ),
    },
    {
      key: 4,
      label: (
        <button className="font-semibold tracking-wide text-base">
          SMS
        </button>
      ),
    },
    {
      key: 3,
      type: "divider",
    },
    {
      key: 2,
      label: (
        <button className="font-semibold tracking-wide text-base">
          O'chirish
        </button>
      ),
      danger: true,
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
          <Button type="primary">...</Button>
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
      key: 1,
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
    <div className="bg-[var(--dark-backround)] w-full">
      <GroupsHeader />
      <Table
        onRow={(record, rowIndex) => ({
          onClick: () => console.log(record),
        })}
        className=" hidden md:block  w-full cursor-pointer"
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 7 }}
      />
      <MobileTableGroups dataSource={data} />
    </div>
  );
}
