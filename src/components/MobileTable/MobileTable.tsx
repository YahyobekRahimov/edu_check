import { Button, Divider, Dropdown } from "antd";
import { MenuProps } from "antd/lib";
import { useAppDispatch } from "../../hooks/redux-hooks";
import {
  setDeductionModal,
  setModalData,
  setModalOpen,
  setSMSDrawer,
} from "../../redux/ModalSlice";
import { useNavigate } from "react-router-dom";

export default function MobileTable({
  dataSource,
}: {
  dataSource: any[];
}) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handlePayment = () => {
    dispatch(setModalOpen(true));
  };
  const handleDeduction = () => {
    dispatch(setDeductionModal(true));
  };
  const items: MenuProps["items"] = [
    {
      key: 1,
      label: (
        <button
          onClick={(e) => {
            e.stopPropagation();
            handlePayment();
          }}
          className="text-green-500 font-semibold w-full text-start py-[5px] px-3"
        >
          To'lov qo'shish
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
          className="py-[5px] px-3 font-semibold w-full text-start"
        >
          SMS
        </button>
      ),
      style: {
        padding: 0,
      },
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
            handleDeduction();
          }}
          className="font-semibold text-red-500 w-full text-start py-[5px] px-3"
        >
          Pul ayrish
        </button>
      ),
      style: {
        padding: 0,
      },
    },
  ];
  return (
    <div className="flex flex-col gap-2">
      {dataSource.map((element, index) => (
        <ul
          key={index}
          className="bg-white p-2 shadow-sm dark:bg-[var(--dark-background-800)] flex flex-col w-full"
          onClick={() =>
            navigate(`/students/${element.id}`, {
              state: { defaultValue: "payments" },
            })
          }
        >
          <li className="flex justify-between items-center">
            <span>F.I.SH:</span>
            <span>{element.name}</span>
          </li>
          <Divider />
          <li className="flex justify-between items-center">
            <span>Telefon raqami:</span>
            <span>{element.phoneNumber}</span>
          </li>
          <Divider />
          <li className="flex justify-between items-center">
            <span>Guruh:</span>
            <span>{element.group}</span>
          </li>
          <Divider />
          <li className="flex justify-between items-center">
            <span>O'qituvchi:</span>
            <span>{element.teacher}</span>
          </li>
          <Divider />
          <li className="flex justify-between items-center">
            <span>Balans:</span>
            <span>
              {element.status === "paid" ? (
                <span className="text-green-600 font-semibold">
                  +${element.balance.toLocaleString()}
                </span>
              ) : (
                <span className="text-red-500 font-semibold">
                  -${element.balance.toLocaleString()}
                </span>
              )}
            </span>
          </li>
          <Divider />
          <li className="flex justify-between items-center">
            <span>Amallar:</span>
            <Dropdown
              menu={{ items }}
              trigger={["click"]}
              placement="bottomLeft"
            >
              <Button
                onClick={(e) => {
                  e.stopPropagation();
                  dispatch(setModalData(element));
                }}
                type="primary"
                size="large"
                className="px-8"
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
