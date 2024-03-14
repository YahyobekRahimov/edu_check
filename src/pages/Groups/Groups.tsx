import { Button, Dropdown, MenuProps, Table, TableProps } from "antd";
import GroupsHeader from "./components/GroupsHeader";
import { DataGroups } from "../../types/types";

export default function Groups() {
  const items: MenuProps["items"] = [
    {
      label: <button>Tahrirlash</button>,
      key: "0",
    },
    {
      label: <button>SMS</button>,
      key: "1",
    },
    {
      type: "divider",
    },
    {
      label: <button>O'chirish</button>,
      key: "3",
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
      title: "Amaller",
      dataIndex: "actions",
      key: "amaller",
      render: () => (
        <Dropdown
          trigger={["click"]}
          menu={{ items }}
          placement="bottom"
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
  ];
  return (
    <div className="bg-[var(--dark-backround)] w-full">
      <GroupsHeader />
      <Table
        onRow={(record, _) => ({
          onClick: () => console.log(record),
        })}
        className=" justify-between  items-center w-full cursor-pointer"
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 7 }}
      />
    </div>
  );
}
