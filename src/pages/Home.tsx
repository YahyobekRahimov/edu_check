import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getCookie } from "../utils/cookies";

export default function Home() {
  const navigate = useNavigate();
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
