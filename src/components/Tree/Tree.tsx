import React from "react";
import InnerTree from "./InnerTree";
import Leaf from "./Leaf";
import { TreeDirectory, TreeLeaf } from "./types";

type TreeProps = {
  data: (TreeDirectory | TreeLeaf)[];
};

const Tree = ({ data }: TreeProps) => {
  return (
    <div>
      {data.map((node) => (
        <div>
          {node.type === "directory" ? (
            <InnerTree data={node} />
          ) : (
            <Leaf data={node} />
          )}
        </div>
      ))}
    </div>
  );
};

export default Tree;
