import React from "react";
import { PageName } from "../../types";
import Logo from "../Logo";
import NavigationItem from "./NavigationItem";

type NavigationProps = {
  pageName: PageName;
};

const Navigation = ({ pageName }: NavigationProps) => {
  return (
    <div className="relative flex justify-center items-center h-10">
      <Logo />
      <div className="flex px-5">
        <NavigationItem link="/blog" selected={pageName === "blog"}>
          blog
        </NavigationItem>
        <NavigationItem link="/til" selected={pageName === "til"}>
          TIL
        </NavigationItem>
      </div>
    </div>
  );
};

export default Navigation;
