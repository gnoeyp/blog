import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/Layout";

const TilPage = ({ data }: any) => {
  return (
    <Layout location="til">
      <div>
        {data.allMarkdownRemark.edges.map(
          (edge: any) => edge.node.frontmatter.title
        )}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      edges {
        node {
          id
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
          }
        }
      }
    }
  }
`;

export default TilPage;
