import { Avatar, Popover } from "antd";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import { UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import {
  useAppDispatch,
  useAppSelector,
} from "../../hooks/redux-hooks";
import { setSelectedNav } from "../../redux/selectedNavSlice";

export default function Header() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const imageSrc = useAppSelector((state) => state.currentUser.image);
  const content = (
    <div className="dark:text-[rgba(255,255,255,0.97)]">
      Profile settings
    </div>
  );
  const handleAvatarClick = () => {
    navigate("/settings");
    dispatch(setSelectedNav("4"));
  };
  return (
    <div className="flex items-center justify-between w-full mx-2 xs:mx-10 lg:mx-6 lg:w-max">
      <div className="w-10 rounded-full overflow-hidden logo">
        <img
          className="logo  "
          src="/src/assets/images/logo.jpg"
          alt="Logo"
        />
      </div>
      <div className=" w-full flex items-center justify-between">
        <ThemeSwitcher />
        <Popover content={content} placement="bottom">
          <div
            onClick={handleAvatarClick}
            className="flex items-center text-white gap-2 font-semibold cursor-pointer"
          >
            <Avatar icon={<UserOutlined />} src={imageSrc} />
            <p className="hidden sm:block">John Doe</p>
          </div>
        </Popover>
      </div>
    </div>
  );
}
