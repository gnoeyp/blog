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
        "px-2 py-1",
        "relative after:content-[''] after:absolute after:left-1.5 after:right-full after:bg-gray-400 dark:after:bg-gray-200 after:h-px after:bottom-0",
        "hover:after:right-1.5",
        selected
          ? "text-gray-900 dark:text-gray-100 after:right-1.5"
          : "text-gray-500 dark:text-gray-200 hover:text-gray-800 dark:hover:text-gray-100 hover:after:animate-underline"
      )}
    >
      {children}
    </Link>
  );
};

export default NavigationItem;
