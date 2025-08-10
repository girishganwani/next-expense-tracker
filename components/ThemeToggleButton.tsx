"use client";

import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";

const ThemeToggleButton = () => {
  const { theme, themeToggler } = useContext(ThemeContext) ?? {};
  console.log(theme);
  return (
    <div className="flex items-center justify-center w-16 h-9 border-none rounded-2xl bg-green-200 dark:bg-green-800 hover:scale-105">
      <button
        onClick={themeToggler}
        className="bg-white dark:bg-gray-700 rounded-full p-[2px] cursor-pointer"
      >
        {theme === "light" ? "☀️" : "🌙"}
      </button>
    </div>
  );
};

export default ThemeToggleButton;
