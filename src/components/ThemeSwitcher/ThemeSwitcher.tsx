import { Select } from "antd";
import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState("");
  const [isDark, setDark] = useState(false);

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
          setDark(true);
        } else {
          setDark(false);
        }
      } else if (theme === "dark") {
        setDark(true);
      } else if (theme === "light") {
        setDark(false);
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
    // <Select
    //   onValueChange={(value) => {
    //     setTheme(value);
    //     localStorage.theme = value;
    //   }}
    //   value={theme}
    // >
    //   <SelectTrigger className="w-[6rem]">
    //     <SelectValue placeholder="Theme" />
    //   </SelectTrigger>
    //   <SelectContent>
    //     <SelectItem className="cursor-pointer" value="light">
    //       Light
    //     </SelectItem>
    //     <SelectItem className="cursor-pointer" value="dark">
    //       Dark
    //     </SelectItem>
    //     <SelectItem className="cursor-pointer" value="system">
    //       System
    //     </SelectItem>
    //   </SelectContent>
    // </Select>
    <Select
      value={theme}
      onChange={(value) => {
        console.log(value);
        setTheme(value);
        localStorage.theme = value;
      }}
      options={[
        { value: "light", label: <span>Light</span> },
        {
          value: "dark",
          label: <span>Dark</span>,
        },
        {
          value: "system",
          label: <span>System</span>,
        },
      ]}
    />
  );
}
