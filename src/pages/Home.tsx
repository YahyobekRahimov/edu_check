import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getCookie, setCookie } from "../utils/cookies";

export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    setCookie("access_token", "asdkjfsl;", 10);
    setCookie("refresh_token", "asdkjfsl;", 10);
  }, []);
  useEffect(() => {
    const jwt = getCookie("access_token");
    if (jwt) {
      navigate("/groups");
    } else {
      navigate("/login");
    }
  }, []);
  return <div></div>;
}
