import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    // const jwt = getCookie("access_token");
    navigate("/groups");
    // if (jwt) {
    //   navigate("/groups");
    // } else {
    //   navigate("/login");
    // }
  }, []);
  return <div></div>;
}
