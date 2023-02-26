import React from "react";
import InnerTree from "./InnerTree";
import Leaf from "./Leaf";
import { TreeRoot } from "./types";

type TreeProps = {
  tree: TreeRoot;
};

const Tree = ({ tree }: TreeProps) => {
  return (
    <div className="dark:text-gray-100">
      {tree.children.map((node) => (
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
