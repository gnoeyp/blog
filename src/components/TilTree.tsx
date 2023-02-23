import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Post } from "../types";
import Tree, { TreeDirectory, TreeLeaf } from "./Tree";

type Data = {
  allMarkdownRemark: {
    edges: {
      node: Post;
    }[];
  };
};
const convertToTreeData = (posts: Post[]) => {
  const result: (TreeDirectory | TreeLeaf)[] = [];
  const createTree = (
    splittedPath: string[],
    slug: string
  ): TreeLeaf | TreeDirectory => {
    if (splittedPath.length === 1)
      return {
        type: "leaf",
        title: splittedPath[0],
        id: splittedPath[0],
        slug,
      };
    return {
      type: "directory",
      title: splittedPath[0],
      id: splittedPath[0],
      children: [createTree(splittedPath.slice(1), slug)],
    };
  };
  const find = (tree: TreeDirectory[], splittedPath: string[]) =>
    tree.find((node) => node.id === splittedPath[0]);
  const isDirectory = (tree: TreeDirectory | TreeLeaf): tree is TreeDirectory =>
    tree.type === "directory";
  const addToResult = (
    tree: TreeDirectory,
    splittedPath: string[],
    slug: string
  ) => {
    const subtree = find(tree.children.filter(isDirectory), splittedPath);
    if (!subtree) {
      tree.children.push(createTree(splittedPath, slug));
    } else {
      addToResult(subtree, splittedPath.slice(1), slug);
    }
  };
  posts.forEach((post) => {
    const { slug } = post.fields;
    const splittedPath = slug.split("/").slice(2, -1);
    const tree = find(result.filter(isDirectory), splittedPath);
    if (tree) {
      addToResult(tree, splittedPath.slice(1), slug);
    } else {
      result.push(createTree(splittedPath, slug));
    }
  });
  return result;
};

const TilTree = () => {
  const data: Data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/til/" } }
        sort: { frontmatter: { date: DESC } }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              title
              tags
            }
          }
        }
      }
    }
  `);
  const treeData = convertToTreeData(
    data.allMarkdownRemark.edges.map((edge) => edge.node)
  );
  console.log(treeData);
  return <Tree data={treeData} />;
};

export default TilTree;
