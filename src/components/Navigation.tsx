import React from "react";
import { Link } from "gatsby";
import Logo from "./Logo";
import clsx from "clsx";

interface NavigationProps {
  location: "til" | "blog";
}

const Navigation = ({ location }: NavigationProps) => {
  return (
    <div className="flex justify-center items-center h-10">
      <Logo />
      <div className="flex px-5">
        <Item link="/blog" selected={location === "blog"}>
          blog
        </Item>
        <Item link="/til" selected={location === "til"}>
          til
        </Item>
      </div>
    </div>
  );
};

interface ItemProps {
  children: React.ReactNode;
  link: string;
  selected?: boolean;
}

const Item = ({ children, link, selected = false }: ItemProps) => {
  return (
    <Link
      to={link}
      className={clsx(
        "hover:text-gray-500 px-2 py-1",
        selected && "text-gray-500"
      )}
    >
      {children}
    </Link>
  );
};

export default Navigation;
