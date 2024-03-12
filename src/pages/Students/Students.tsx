import {
  Button,
  Dropdown,
  Space,
  Table,
  TableProps,
  Tag,
} from "antd";

import { ColumnType } from "antd/es/table";
import { MenuProps } from "antd/lib";

type RowType = {
  key: string;
  ism: string;
  phoneNumber: string;
  group: string;
  sana: Number;
  tolov: string;
  actions: any;
};
export default function Students() {
  const dataSource = [
    {
      key: "1",
      name: "Mike",
      sana: 32,
      group: 5,
      phoneNumber: 45454854454,
      tolov: "qilindi",
      Oqituvchi:"alijonov",
    },
    {
      key: "2",
      name: "Mike",
      sana: 32,
      group: 5,
      phoneNumber: 45454854454,
      tolov: "qilindi",
      Oqituvchi:"alijonov",
    },
    {
      key: "3",
      name: "Mike",
      sana: 32,
      group: 5,
      phoneNumber: 45454854454,
      tolov: "qilindi",
      Oqituvchi:"alijonov",
    },
    {
      key: "4",
      name: "Mike",
      sana: 32,
      group: 5,
      phoneNumber: 45454854454,
      tolov: "qilindi",
      Oqituvchi:"alijonov",
    },
  ];

  const columns: ColumnType<RowType> = [
    {
      title: "#",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Ism",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Telefon raqam",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "Guruh",
      dataIndex: "group",
      key: "group",
    },
    {
      title:"Oqituvchi",
      dataIndex:"Oqituvchi",
      key:"Oqituvchi",
    },
    {
      title: "Mashgulot sana",
      dataIndex: "sana",
      key: "sana",
    },
    {
      title: "tolov",
      dataIndex: "tolov",
      key: "tolov",
    },

    {
      title: "Amallar",
      dataIndex: "actions",
      key: "actions",
      render: () => {
        return (
          <Dropdown trigger={["click"]} menu={{ items }}>
            <Button type="primary">...</Button>
          </Dropdown>
        );
      },
    },
  ];

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
      label: <button  >O'chirish</button>,
      key: "3",
    },
  ];

  return (
    <main>
      <Table dataSource={dataSource} columns={columns} />
    </main>
  );
}

// git pull origin main => yangiliklarni main branchdan tortib olish.

// git push origin Rahmatillo => yangiliklarni o'zingizni branchingizga yuborish.

// git add . => qo'shish

// git commit -m 'commit message' => commit qilish