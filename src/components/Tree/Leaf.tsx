import clsx from "clsx";
import { Link } from "gatsby";
import React from "react";
import { TreeLeaf } from "./types";

type LeafProps = {
  data: TreeLeaf;
};

const Leaf = ({ data }: LeafProps) => {
  return (
    <Link to={data.slug}>
      <div
        className={clsx(
          "text-slate-500 hover:text-slate-800 dark:text-gray-100 dark:hover:text-white",
          data.isSelected && "underline"
        )}
      >
        {data.title}
      </div>
    </Link>
  );
};

export default Leaf;
