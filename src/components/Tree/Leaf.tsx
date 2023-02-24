import { Link } from "gatsby";
import React from "react";
import { TreeLeaf } from "./types";

type LeafProps = {
  data: TreeLeaf;
};
const Leaf = ({ data }: LeafProps) => {
  return (
    <Link to={data.slug}>
      <div className="text-slate-500 hover:text-slate-800">{data.title}</div>
    </Link>
  );
};

export default Leaf;
