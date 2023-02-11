import { useLayoutEffect, useState } from "react";

type Theme = "dark" | "light";

const getInitTheme = (): Theme => {
  if (localStorage.theme === "dark") return "dark";
  if (localStorage.theme === "light") return "light";
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) return "dark";
  return "light";
};

const useTheme = (): [Theme, () => void] => {
  const [theme, setTheme] = useState<Theme>(getInitTheme());

  useLayoutEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return [theme, toggleTheme];
};

export default useTheme;
