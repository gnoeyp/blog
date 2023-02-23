import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "gatsby";
import React, { useState } from "react";

export type TreeLeaf = {
  type: "leaf";
  title: string;
  slug: string;
};

export type TreeDirectory = {
  type: "directory";
  title: string;
  children: (TreeDirectory | TreeLeaf)[];
};

type TreeProps = {
  data: (TreeDirectory | TreeLeaf)[];
};

type InnerTreeProps = {
  data: TreeDirectory;
};

type LeafProps = {
  data: TreeLeaf;
};

const Leaf = ({ data }: LeafProps) => {
  console.log(data);
  return (
    <Link to={data.slug}>
      <div>{data.title}</div>
    </Link>
  );
};

const InnerTree = ({ data }: InnerTreeProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="cursor-pointer">
      <div onClick={() => setIsOpen(!isOpen)}>
        {data.title}{" "}
        {isOpen ? (
          <FontAwesomeIcon icon={faCaretUp} />
        ) : (
          <FontAwesomeIcon icon={faCaretDown} />
        )}
      </div>
      <div className="pl-3">
        {isOpen &&
          data.children?.map((child) =>
            child.type === "directory" ? (
              <InnerTree data={child} />
            ) : (
              <Leaf data={child} />
            )
          )}
      </div>
    </div>
  );
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
