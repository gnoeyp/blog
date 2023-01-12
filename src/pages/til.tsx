import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/Layout";

type Data = {
  allMarkdownRemark: {
    edges: {
      node: {
        id: number;
        frontmatter: {
          date: string;
          slug: string;
          title: string;
        };
      };
    }[];
  };
};

interface TilPageProps {
  data: Data;
}

const TilPage = ({ data }: TilPageProps) => {
  return (
    <Layout location="til">
      <div>
        {data.allMarkdownRemark.edges.map(
          (edge) => edge.node.frontmatter.title
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
