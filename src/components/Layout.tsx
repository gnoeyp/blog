import React, { useLayoutEffect, useState } from "react";
import { PageName } from "../types";
import Navigation from "./Navigation";

type LayoutProps = {
  children: React.ReactNode;
  location: {
    pathname: string;
  };
};

const getInitTheme = () => {
  if (["dark", "light"].includes(localStorage.theme)) return localStorage.theme;
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) return "dark";
  return "light";
};

const getPageName = (pathname: string): PageName => {
  if (["blog"].includes(pathname.split("/")[1])) return "blog";
  if (!pathname.split("/")[1]) return "main";
  return "main";
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
      <Navigation pageName={getPageName(location.pathname)} />
      {children}
    </div>
  );
};

export default Layout;
