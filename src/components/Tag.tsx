import React from "react";
import clsx from "clsx";

type Size = "medium" | "small";

type TagProps = {
  children: string;
  checked?: boolean;
  onClick?: () => void;
  size?: Size;
  clickable?: boolean;
};

const SIZE_MAP: Record<Size, string> = {
  medium: "text-base",
  small: "text-xs",
};

const Tag = ({
  children,
  checked,
  clickable,
  onClick,
  size = "medium",
}: TagProps) => {
  return (
    <div
      className={clsx(
        "bg-lime-100 rounded-full px-2 text-gray-400 w-fit",
        clickable && "cursor-pointer hover:bg-lime-200",
        checked && "bg-lime-300 hover:bg-lime-300",
        SIZE_MAP[size]
      )}
      onClick={clickable ? onClick : undefined}
    >
      {children}
    </div>
  );
};

export default Tag;
