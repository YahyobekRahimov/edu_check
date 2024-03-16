import { Button, Dropdown, Table } from "antd";
import { ColumnType } from "antd/es/table";
import { MenuProps } from "antd/lib";
import { useState } from "react";
import ActionModal from "./ActionModal";
import { useAppDispatch } from "../../hooks/redux-hooks";
import {
  setDeductionModal,
  setPaymentModalData,
  setPaymentModalOpen,
} from "../../redux/isPaymentModalOpenSlice";

export type RowType = {
  key: string;
  name: string;
  address: string;
  phoneNumber: string;
  group: string;
  teacher: string;
  status: "paid" | "unpaid";
  balance: number;
};

export default function DesktopTable({
  dataSource,
}: {
  dataSource: any[];
}) {
  // @ts-ignore
  const [currentRecordData, setCurrentRecordData] = useState<any>();
  const dispatch = useAppDispatch();

  const handlePayment = () => {
    dispatch(setPaymentModalOpen(true));
  };
  const handleDeduction = () => {
    dispatch(setDeductionModal(true));
  };

  const items: MenuProps["items"] = [
    {
      key: 1,
      label: (
        <button
          onClick={handlePayment}
          className="text-green-500 text-lg font-semibold"
        >
          To'lov qo'shish
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
        <button
          onClick={handleDeduction}
          className="text-lg font-semibold text-red-500"
        >
          Pul ayrish
        </button>
      ),
    },
  ];

  const columns: ColumnType<RowType>[] = [
    {
      title: "#",
      dataIndex: "index",
      key: "index",
      // @ts-ignore
      render(value: any, _: any, index: number) {
        return index + 1;
      },
      width: 50,
      responsive: ["xl"],
    },
    {
      title: "F.I.Sh",
      dataIndex: "name",
      key: "name",
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
      sorter: (a: RowType, b: RowType) =>
        a.group.charAt(0).localeCompare(b.group.charAt(0)),
    },
    {
      title: "O'qituvchi",
      dataIndex: "teacher",
      key: "teacher",
      sorter: (a: RowType, b: RowType) => {
        return a.teacher.localeCompare(b.teacher);
      },
    },
    {
      title: "Holat",
      dataIndex: "status",
      key: "status",
      responsive: ["lg"],
      render(value: string) {
        return value == "paid" ? "To'langan✅" : "Qarzi bor❌";
      },
      sorter: (a: RowType, b: RowType) =>
        a.status.length - b.status.length,
    },
    {
      title: "Balans",
      dataIndex: "balance",
      key: "balance",
      render(value, record: RowType) {
        if (record?.status === "paid") {
          return (
            <span className="text-green-600 font-semibold">
              +${value}
            </span>
          );
        }
        return (
          <span className="text-red-500 font-semibold">
            -${value}
          </span>
        );
      },
      sorter: (a: RowType, b: RowType) => {
        let first = a.balance;
        let second = b.balance;
        if (a.status == "unpaid") {
          first = -first;
        }
        if (b.status == "unpaid") {
          second = -second;
        }
        return second - first;
      },
      sortDirections: ["ascend", "descend"],
    },
    {
      title: "Amallar",
      dataIndex: "actions",
      key: "actions",
      render: (_, record: RowType) => {
        return (
          <Dropdown
            menu={{ items }}
            trigger={["click"]}
            placement="bottomLeft"
          >
            <Button
              onClick={() => dispatch(setPaymentModalData(record))}
              type="primary"
            >
              ...
            </Button>
          </Dropdown>
        );
      },
    },
  ];

  return (
    <div className="hidden md:block">
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={false}
        // onRow={(record, rowIndex) => ({
        //   onClick: () => {
        //     console.log("first");
        //   },
        // })}
        sticky
      />
      <ActionModal />
    </div>
  );
}
