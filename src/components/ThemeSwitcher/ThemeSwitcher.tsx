import { Select } from "antd";
import { useEffect, useState } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../hooks/redux-hooks";
import { setIsDark } from "../../redux/isDarkSlice";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState("");

  const isDark = useAppSelector((state) => state.isDark);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (localStorage.getItem("theme")) {
      const localTheme = localStorage.getItem("theme");
      if (localTheme === "system") {
        setTheme("system");
        localStorage.setItem("theme", "system");
      } else if (localTheme === "dark") {
        setTheme("dark");
        localStorage.setItem("theme", "dark");
      } else if (localTheme === "light") {
        setTheme("light");
        localStorage.setItem("theme", "light");
      }
    }
  }, []);

  useEffect(() => {
    if (theme) {
      if (theme === "system") {
        if (
          window.matchMedia("(prefers-color-scheme: dark)").matches
        ) {
          dispatch(setIsDark(true));
        } else {
          dispatch(setIsDark(false));
        }
      } else if (theme === "dark") {
        dispatch(setIsDark(true));
      } else if (theme === "light") {
        dispatch(setIsDark(false));
      }
    }
  }, [theme]);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);
  return (
    <Select
      value={theme}
      onChange={(value) => {
        setTheme(value);
        localStorage.theme = value;
      }}
      className="w-[6rem] dark:bg-[var(--dark-background-900)] mr-6"
      dropdownStyle={
        isDark
          ? {
              background: "var(--dark-background-900)",
              color: "#2b30ea",
            }
          : {}
      }
      rootClassName="dark:bg-[rgb(2,6,23)]"
      options={[
        {
          value: "light",
          label: (
            <span className="dark:text-[rgba(255,255,255,0.8)]">
              Light
            </span>
          ),
        },
        {
          value: "dark",
          label: (
            <span className="dark:text-[rgba(255,255,255,0.8)]">
              Dark
            </span>
          ),
        },
        {
          value: "system",
          label: (
            <span className="dark:text-[rgba(255,255,255,0.8)]">
              System
            </span>
          ),
        },
      ]}
    />
  );
}
