import React from "react";
import clsx from "clsx";

type TagProps = {
  children: string;
  checked?: boolean;
  onClick?: () => void;
};

const Tag = ({ children, checked, onClick }: TagProps) => {
  return (
    <div
      className={clsx(
        "rounded-full px-2 text-gray-400 cursor-pointer",
        checked ? "bg-lime-300" : "bg-lime-100 hover:bg-lime-200"
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Tag;
