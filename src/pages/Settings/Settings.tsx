import { Button, Skeleton } from "antd";
import { deleteCookie } from "../../utils/cookies";
import { useNavigate } from "react-router-dom";

export default function Settings() {
  const navigate = useNavigate();
  const handleLogout = () => {
    deleteCookie("access_token");
    deleteCookie("refresh_token");
    navigate("/");
  };
  return (
    <div className="p-10">
      <div className="max-w-[200px] max-h-[200px] overflow-hidden rounded-full pointer-events-none">
        <img
          src="https://picsum.photos/200/200"
          alt="Avatar photo"
          className="pointer-events-none"
        />
        <Skeleton.Avatar
          size={"large"}
          shape="circle"
          style={{ width: "200px", height: "200px" }}
        />
      </div>
      <div>
        <Button onClick={handleLogout}>Logout</Button>
      </div>
    </div>
  );
}
