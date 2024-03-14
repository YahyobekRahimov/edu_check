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
    <div className="mr-6 flex items-center">
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
          <p>John Doe</p>
        </div>
      </Popover>
    </div>
  );
}
