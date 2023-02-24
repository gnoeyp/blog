import { Post } from "../types";
import { TreeLeaf, TreeDirectory, TreeRoot } from "./Tree";

const convertToTreeData = (posts: Post[]) => {
  const root: TreeRoot = {
    type: "root",
    children: [],
  };
  posts.forEach((post) => {
    const { slug } = post.fields;
    const splittedPath = slug.split("/").slice(2, -1);
    addToTree(root, splittedPath, slug);
  });
  return root;
};

const createTree = (
  splittedPath: string[],
  slug: string
): TreeLeaf | TreeDirectory => {
  if (splittedPath.length === 1)
    return {
      type: "leaf",
      title: splittedPath[0],
      slug,
    };
  return {
    type: "directory",
    title: splittedPath[0],
    children: [createTree(splittedPath.slice(1), slug)],
  };
};

const find = (tree: TreeDirectory[], splittedPath: string[]) =>
  tree.find((node) => node.title === splittedPath[0]);

const addToTree = (
  tree: TreeDirectory | TreeRoot,
  splittedPath: string[],
  slug: string
) => {
  const subtree = find(tree.children.filter(isDirectory), splittedPath);
  if (!subtree) {
    tree.children.push(createTree(splittedPath, slug));
  } else {
    addToTree(subtree, splittedPath.slice(1), slug);
  }
};

const isDirectory = (tree: TreeDirectory | TreeLeaf): tree is TreeDirectory =>
  tree.type === "directory";

export default convertToTreeData;
