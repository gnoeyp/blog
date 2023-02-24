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
