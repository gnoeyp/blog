import React from "react";
import { Link } from "gatsby";
import clsx from "clsx";

type ItemProps = {
  children: React.ReactNode;
  link: string;
  selected?: boolean;
};

const NavigationItem = ({ children, link, selected = false }: ItemProps) => {
  return (
    <Link
      to={link}
      className={clsx(
        "text-gray-500 hover:text-gray-800 px-2 py-1",
        "relative after:content-[''] after:absolute after:left-1.5 after:right-full after:bg-gray-400 after:h-px after:bottom-0",
        "hover:after:right-1.5",
        selected && "text-gray-900 after:right-1.5",
        !selected && "hover:after:animate-underline"
      )}
    >
      {children}
    </Link>
  );
};

export default NavigationItem;
