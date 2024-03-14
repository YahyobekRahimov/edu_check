import { Avatar, Popover } from "antd";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import { UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/redux-hooks";
import { setSelectedNav } from "../../redux/selectedNavSlice";

export default function Header() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
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
      <div className="w-10 rounded-full overflow-hidden lg:hidden">
        <img src="/src/assets/images/logo.jpg" alt="Logo" />
      </div>
      <div className="flex items-center">
        <ThemeSwitcher />
        <Popover content={content} placement="bottom">
          <div
            onClick={handleAvatarClick}
            className="flex items-center text-white gap-2 font-semibold cursor-pointer"
          >
            <Avatar
              icon={<UserOutlined />}
              src="https://picsum.photos/200/300"
            />
            <p className="hidden sm:block">John Doe</p>
          </div>
        </Popover>
      </div>
    </div>
  );
}
