import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Post } from "../types";
import Tree, { TreeDirectory, TreeRoot } from "./Tree";
import convertToTreeData from "./convertToTreeData";

type Data = {
  allMarkdownRemark: {
    edges: {
      node: Post;
    }[];
    a: JSX.Element;
  };
};

type TilTreeProps = {
  location: {
    pathname: string;
  };
};

const TilTree = ({ location }: TilTreeProps) => {
  const data: Data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/til/" } }
        sort: { frontmatter: { date: DESC } }
      ) {
        edges {
          node {
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

  const selectNode = (tree: TreeRoot | TreeDirectory, path: string[]) => {
    console.log(path);
    const node = tree.children.find((node) => node.title === path[0]);
    if (node) {
    }
  };

  selectNode(
    treeData,
    location.pathname
      .split("/")
      .filter((item) => item !== "")
      .slice(1)
  );
  console.log(location);
  return <Tree tree={treeData} />;
};

export default TilTree;
