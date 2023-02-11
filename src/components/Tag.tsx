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

const VARIANTS_MAP = {
  default: "bg-lime-100 dark:bg-indigo-600 text-gray-400 dark:text-gray-200",
  clickable:
    "bg-lime-100 dark:bg-zinc-600 text-gray-400 dark:text-gray-200 cursor-pointer hover:bg-lime-200 dark:hover:bg-indigo-600",
  checked:
    "text-gray-400 dark:text-gray-200 cursor-pointer bg-lime-300 dark:bg-indigo-500 hover:bg-lime-300 dark:hover:bg-indigo-500",
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
        "px-2 rounded-full w-fit",
        SIZE_MAP[size],
        VARIANTS_MAP[checked ? "checked" : clickable ? "clickable" : "default"]
      )}
      onClick={clickable ? onClick : undefined}
    >
      {children}
    </div>
  );
};

export default Tag;
