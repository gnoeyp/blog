import React from "react";
import useTheme from "../hooks/useTheme";
import { PageName } from "../types";
import Navigation from "./Navigation";
import TilTree from "./TilTree";

type LayoutProps = {
  children: React.ReactNode;
  location: {
    pathname: string;
  };
};

const getPageName = (pathname: string): PageName => {
  if (!pathname.split("/")[1]) return "main";
  const pageName = pathname.split("/")[1];
  if (pageName === "blog" || pageName === "til") return pageName;
  return "main";
};

const Layout = ({ children, location }: LayoutProps) => {
  const [theme, toggleTheme] = useTheme();
  const pageName = getPageName(location.pathname);
  return (
    <div className="dark:bg-zinc-900 max-h-full min-h-screen">
      <div className="relative w-1/2 m-auto">
        <Navigation pageName={pageName} />
        <div
          className="absolute h-full top-0 right-0 flex items-center"
          onClick={toggleTheme}
        >
          <button className="border border-gray-600 text-gray-600 p-1 rounded-sm dark:border-gray-100 dark:text-gray-100">
            {theme === "dark" ? "Light" : "Dark"}
          </button>
        </div>
      </div>
      {pageName === "til" && (
        <div className="absolute left-20 top-20">
          <TilTree location={location} />
        </div>
      )}
      {children}
    </div>
  );
};

export default Layout;
