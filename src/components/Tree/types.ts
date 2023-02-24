export type TreeLeaf = {
  type: "leaf";
  title: string;
  slug: string;
  isSelected?: boolean;
};

export type TreeDirectory = {
  type: "directory";
  title: string;
  children: (TreeDirectory | TreeLeaf)[];
};

export type TreeRoot = Pick<TreeDirectory, "children"> & {
  type: "root";
};
