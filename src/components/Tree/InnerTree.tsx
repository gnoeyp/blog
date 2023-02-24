import React, { useState } from "react";
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TreeDirectory } from "./types";
import Leaf from "./Leaf";

type InnerTreeProps = {
  data: TreeDirectory;
};

const InnerTree = ({ data }: InnerTreeProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="cursor-pointer">
      <div
        className="text-lg text-slate-800 flex items-center gap-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        {data.title}
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

export default InnerTree;
