import { graphql, Link } from "gatsby";
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
  const posts = data.allMarkdownRemark.edges;
  return (
    <Layout location="til">
      <div>
        {posts.map((post) => (
          <Link to={`/til${post.node.frontmatter.slug}`}>
            {post.node.frontmatter.title}
          </Link>
        ))}
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
