


import { AutoComplete, Input } from 'antd';
import type { SelectProps } from 'antd';


const getRandomInt = (max: number, min = 0) => Math.floor(Math.random() * (max - min + 1)) + min;

const searchResult = (query: string) =>
  new Array(getRandomInt(5))
    .join('.')
    .split('.')
    .map((_, idx) => {
      const category = `${query}${idx}`;
      return {
        value: category,
        label: (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <span>
              Found {query} on{' '}
              <a
                href={`https://s.taobao.com/search?q=${query}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {category}
              </a>
            </span>
            <span>{getRandomInt(200, 100)} results</span>
          </div>
        ),
      };
    });

const App: React.FC = () => {
  const [options, setOptions] = useState<SelectProps<object>['options']>([]);

  const handleSearch = (value: string) => {
    setOptions(value ? searchResult(value) : []);
  };

  const onSelect = (value: string) => {
    console.log('onSelect', value);
  };


};








import {
  Button,
  Dropdown,
  Space,
  Table,
  TableProps,
  Tag,
} from "antd";
import React, { useState } from 'react';


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
  status: "paid" | "unpaid";

};
export default function Students() {
  const dataSource = [
    {
      key: "1",
      name: "a",
      sana: 32,
      group: 5,
      phoneNumber: 45454854454,
      status: "paid",
      Oqituvchi:"Alijonov",
    },
    {
      key: "2",
      name: "B",
      sana: 32,
      group: 5,
      phoneNumber: 45454854454,
      status:"unpaid",

            Oqituvchi:"B",
    },
    {
      key: "3",
      name: "s",
      sana: 32,
      group: 5,
      phoneNumber: 45454854454,
      status:"unpaid",
      Oqituvchi:"alijonov",
    },
    {
      key: "4",
      name: "Mike",
      sana:22551554,
      group:5,
      phoneNmber: 45454854454,
     status: "paid",
      Oqituvchi:"D",
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
      onFilter: (value: any, record: RowType) =>
      record.name.charAt(0).toUpperCase() === value.toUpperCase(),
    sorter: (a: RowType, b: RowType) =>
      a.name.localeCompare(b.name),
    sortDirections: ["ascend", "descend"],
    defaultSortOrder: "ascend",
      
   
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
     
      render(value: string) {
        return value == "paid" ? "To'langan✅" : "Qarzi bor❌";
      },
      sorter: (a: RowType, b: RowType) =>
        a.status.length - b.status.length,
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
            <Input.Search size="large" placeholder="Ismni kiriting"  enterButton />











      <Table dataSource={dataSource} columns={columns} />
     
   
      
    
    </main>
  );
}

// git pull origin main => yangiliklarni main branchdan tortib olish.

// git push origin Rahmatillo => yangiliklarni o'zingizni branchingizga yuborish.

// git add . => qo'shish

// git commit -m 'commit message' => commit qilish