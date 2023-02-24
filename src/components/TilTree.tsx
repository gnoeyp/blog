import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Post } from "../types";
import Tree from "./Tree";
import convertToTreeData from "./convertToTreeData";

type Data = {
  allMarkdownRemark: {
    edges: {
      node: Post;
    }[];
  };
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
  return <Tree tree={treeData} />;
};

export default TilTree;
