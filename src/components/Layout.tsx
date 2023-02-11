import React from "react";
import useTheme from "../hooks/useTheme";
import { PageName } from "../types";
import Navigation from "./Navigation";

type LayoutProps = {
  children: React.ReactNode;
  location: {
    pathname: string;
  };
};

const getPageName = (pathname: string): PageName => {
  if (["blog"].includes(pathname.split("/")[1])) return "blog";
  if (!pathname.split("/")[1]) return "main";
  return "main";
};

const Layout = ({ children, location }: LayoutProps) => {
  const [theme, toggleTheme] = useTheme();
  return (
    <div className="dark:bg-zinc-900 max-h-full min-h-screen">
      <div className="relative w-1/2 m-auto">
        <Navigation pageName={getPageName(location.pathname)} />
        <div
          className="absolute h-full top-0 right-0 flex items-center"
          onClick={toggleTheme}
        >
          <button className="border border-gray-600 text-gray-600 p-1 rounded-sm dark:border-gray-100 dark:text-gray-100">
            {theme === "dark" ? "Light" : "Dark"}
          </button>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Layout;
