import { Button, Dropdown } from "antd";
import { MenuProps } from "antd/lib";
import { useAppDispatch } from "../../hooks/redux-hooks";
import {
  setPaymentModalData,
  setPaymentModalOpen,
} from "../../redux/isPaymentModalOpenSlice";

type RowType = {
  key: string;
  name: string;
  phoneNumber: string;
  group: string;
  date: string;
  status: "paid" | "unpaid";
  teacher: string;
};

export default function MobileTable({
  dataSource,
}: {
  dataSource: RowType[];
}) {
  const dispatch = useAppDispatch();
  const handlePayment = () => {
    dispatch(setPaymentModalOpen(true));
  };
  const handleDeduction = () => {};
  const items: MenuProps["items"] = [
    {
      key: 1,
      label: (
        <button
          onClick={handlePayment}
          className=" text-lg font-semibold"
        >
          Tahrirlash
        </button>
      ),
    },
    {
      key: 4,
      label: (
        <button
          onClick={handleDeduction}
          className="text-lg font-semibold "
        >
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
        <button
          onClick={handleDeduction}
          className="text-lg text-red-500 font-semibold "
        >
          O'chirish
        </button>
      ),
    },
 
  ];
  return (
    <div className="flex flex-col gap-2 md:hidden">
      {dataSource.map((element, index) => (
        <ul
          key={index}
          className="bg-white p-2 shadow-sm dark:bg-[var(--dark-background-800)] flex flex-col w-full"
        >
          <li className="flex justify-between items-center">
            <span>F.I.SH:</span>
            <span>{element.name}</span>
          </li>
          <li className="flex justify-between items-center">
            <span>Telefon raqami:</span>
            <span>{element.phoneNumber}</span>
          </li>
          <li className="flex justify-between items-center">
            <span>Guruh:</span>
            <span>{element.group}</span>
          </li>
          <li className="flex justify-between items-center">
            <span>O'qituvchi:</span>
            <span>{element.teacher}</span>
          </li>
          <li className="flex justify-between items-center">
            <span>Holat:</span>
            <span>
              {element.status === "paid"
                ? "To'lagan✅"
                : "Qarzi bor❌"}
            </span>
          </li>

          <li className="flex justify-between items-center">
            <span>Amallar:</span>
            <Dropdown
              menu={{ items }}
              trigger={["click"]}
              placement="bottomLeft"
            >
              <Button
                onClick={() => dispatch(setPaymentModalData(element))}
                type="primary"
              >
                ...
              </Button>
            </Dropdown>
          </li>
        </ul>
      ))}
    </div>
  );
}
