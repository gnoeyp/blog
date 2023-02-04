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
        "hover:text-gray-500 px-2 py-1",
        selected && "text-gray-500"
      )}
    >
      {children}
    </Link>
  );
};

export default NavigationItem;
