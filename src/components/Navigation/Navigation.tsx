import React from "react";
import { Location } from "../../types";
import Logo from "../Logo";
import NavigationItem from "./NavigationItem";

type NavigationProps = {
  location: Location;
};

const Navigation = ({ location }: NavigationProps) => {
  return (
    <div className="flex justify-center items-center h-10">
      <Logo />
      <div className="flex px-5">
        <NavigationItem link="/blog" selected={location === "blog"}>
          blog
        </NavigationItem>
      </div>
    </div>
  );
};

export default Navigation;
