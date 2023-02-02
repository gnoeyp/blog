import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import TilPreview from "../components/TilPreview";

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
      <div className="flex justify-center p-5">
        <div className="w-1/2">
          {posts.map((post) => (
            <Link to={`/til${post.node.frontmatter.slug}`}>
              <TilPreview
                title={post.node.frontmatter.title}
                date={post.node.frontmatter.date}
              />
            </Link>
          ))}
        </div>
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
