import { Button } from "antd";
import { deleteCookie } from "../../utils/cookies";
import { useNavigate } from "react-router-dom";
import CountUp from "react-countup";
import {
  useAppDispatch,
  useAppSelector,
} from "../../hooks/redux-hooks";
import {
  setChangeInfoModal,
  setChangePasswordModal,
} from "../../redux/ModalSlice";
import ChangePasswordModal from "./ChangePasswordModal";
import ChangeInfoModal from "./ChangeInfoModal";
import AvatarImageUpload from "./AvatarImageUpload";

export default function Settings() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { firstName, lastName, birthDate, balance } = useAppSelector(
    (state) => state.currentUser
  );
  const handleLogout = () => {
    deleteCookie("access_token");
    deleteCookie("refresh_token");
    navigate("/");
  };

  const handleChangePassword = () => {
    dispatch(setChangePasswordModal(true));
  };
  const handleChangeInfo = () => {
    dispatch(setChangeInfoModal(true));
  };
  return (
    <div className="px-2 pt-10 lg:p-10">
      <div className="flex flex-col lg:flex-row items-center gap-10">
        <AvatarImageUpload />
        <div className="flex flex-col gap-5">
          <p className="font-semibold text-3xl text-center lg:text-start">
            {firstName + " " + lastName}
          </p>
          <div className="flex flex-col gap-5">
            <Button
              type="primary"
              size="large"
              onClick={handleChangeInfo}
            >
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
          <span>{firstName}</span>
        </li>
        <li className="lg:px-5 lg:py-3 px-3 py-2 bg-gray-100 dark:bg-[var(--dark-background-700)] rounded-lg flex items-center justify-between">
          <span className="font-semibold">Familiya: </span>
          <span>{lastName}</span>
        </li>
        <li className="lg:px-5 lg:py-3 px-3 py-2 bg-gray-100 dark:bg-[var(--dark-background-700)] rounded-lg flex items-center justify-between">
          <span className="font-semibold">Tug'ilgan vaqt: </span>
          <span>{birthDate ?? ""}</span>
        </li>
        <li className="lg:px-5 lg:py-3 px-3 py-2 bg-gray-100 dark:bg-[var(--dark-background-700)] rounded-lg flex items-center justify-between">
          <span className="font-semibold">Balans: </span>
          <span className="text-green-500">
            <CountUp
              delay={0.5}
              end={balance}
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
