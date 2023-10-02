"use client";

import { useState, useEffect } from "react";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";
import Image from "next/image";

interface ThemeSwitcherProps {
  setDarkMode: (theme: string) => void;
}

const ThemeSwitcher = ({ setDarkMode }: ThemeSwitcherProps) => {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setDarkMode("dark");
      setTheme("moon");
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");

      return;
    }
    setDarkMode("light");
    setTheme("sun");
    localStorage.theme = "light";
    document.documentElement.classList.remove("dark");

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleTheme = () => {
    if (localStorage.theme === "light") {
      setDarkMode("dark");
      setTheme("moon");
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");

      return;
    }

    setDarkMode("light");
    setTheme("sun");
    localStorage.theme = "light";
    document.documentElement.classList.remove("dark");
  };

  return (
    <div className="flex items-center space-x-2">
      <Switch id="theme-mode" onCheckedChange={toggleTheme} />
      <Label htmlFor="theme-mode">
        <Image src={`/theme/${theme}.svg`} alt="theme" width={20} height={20} />
      </Label>
    </div>
  );
};

export default ThemeSwitcher;
