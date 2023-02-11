import React, { useLayoutEffect, useState } from "react";
import { Location } from "../types";
import Navigation from "./Navigation";

type LayoutProps = {
  children: React.ReactNode;
  location: Location;
};

const getInitTheme = () => {
  if (["dark", "light"].includes(localStorage.theme)) return localStorage.theme;
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) return "dark";
  return "light";
};

const Layout = ({ children, location }: LayoutProps) => {
  const [theme, setTheme] = useState<"dark" | "light">(getInitTheme());

  useLayoutEffect(() => {
    document.documentElement.classList.remove("dark");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      localStorage.theme = "light";
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="dark:bg-gray-800 max-h-full min-h-screen">
      <button onClick={toggleTheme} className="border rounded">
        Toggle Theme
      </button>
      <Navigation location={location} />
      {children}
    </div>
  );
};

export default Layout;
