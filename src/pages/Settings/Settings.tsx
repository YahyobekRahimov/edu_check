import { Button } from "antd";
import { deleteCookie } from "../../utils/cookies";
import { useNavigate } from "react-router-dom";
import CountUp from "react-countup";
import { useAppDispatch } from "../../hooks/redux-hooks";
import { setChangePasswordModal } from "../../redux/ModalSlice";
import ChangePasswordModal from "./ChangePasswordModal";
import ChangeInfoModal from "./ChangeInfoModal";
import AvatarImageUpload from "./AvatarImageUpload";

export default function Settings() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    deleteCookie("access_token");
    deleteCookie("refresh_token");
    navigate("/");
  };
  const data = {
    "id": 1,
    "firstName": "John",
    "lastName": "Doe",
    "phone_number": 1234567890,
    "birth_date": "1980-01-01",
    "photo": "https://example.com/photo.jpg",
    "groups": [
      {
        "id": 1,
        "name": "Mathematics",
      },
      {
        "id": 2,
        "name": "Science",
      },
    ],
    "students": 20,
    "balance": 100000,
    "payments_history": [
      {
        "date": "2023-01-01",
        "amount": 100,
      },
      {
        "date": "2023-02-15",
        "amount": 150,
      },
    ],
  };

  const handleChangePassword = () => {
    dispatch(setChangePasswordModal(true));
  };
  return (
    <div className="p-2 lg:p-10">
      <div className="flex flex-col lg:flex-row items-center gap-10">
        <AvatarImageUpload />
        <div className="flex flex-col gap-5">
          <p className="font-semibold text-3xl text-center lg:text-start">
            John Doe
          </p>
          <div className="flex flex-col gap-5">
            <Button type="primary" size="large">
              Profilni tahrirlash
            </Button>
            <Button
              size="large"
              type="default"
              onClick={handleChangePassword}
            >
              Parolni o'zgartirish
            </Button>
          </div>
          <Button
            className="w-max"
            type="primary"
            danger
            onClick={handleLogout}
          >
            Chiqish
          </Button>
        </div>
      </div>
      <ul className="lg:w-[50%] md:w-[80%] md:mx-auto lg:mx-0 flex flex-col gap-5 mt-8 text-lg lg:text-xl text-nowrap">
        <li className="lg:px-5 lg:py-3 px-3 py-2 bg-gray-100 dark:bg-[var(--dark-background-700)] rounded-lg flex items-center justify-between">
          <span className="font-semibold">Ism: </span>
          <span>{data.firstName}</span>
        </li>
        <li className="lg:px-5 lg:py-3 px-3 py-2 bg-gray-100 dark:bg-[var(--dark-background-700)] rounded-lg flex items-center justify-between">
          <span className="font-semibold">Familiya: </span>
          <span>{data.lastName}</span>
        </li>
        <li className="lg:px-5 lg:py-3 px-3 py-2 bg-gray-100 dark:bg-[var(--dark-background-700)] rounded-lg flex items-center justify-between">
          <span className="font-semibold">Tug'ilgan vaqt: </span>
          <span>{data.birth_date}</span>
        </li>
        <li className="lg:px-5 lg:py-3 px-3 py-2 bg-gray-100 dark:bg-[var(--dark-background-700)] rounded-lg flex items-center justify-between">
          <span className="font-semibold">Balans: </span>
          <span className="text-green-500">
            <CountUp
              delay={0.5}
              end={data.balance}
              duration={3}
              suffix=" so'm"
            />
          </span>
        </li>
      </ul>
      <ChangePasswordModal />
      <ChangeInfoModal />
    </div>
  );
}
