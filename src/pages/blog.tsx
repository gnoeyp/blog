import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import PostPreview from "../components/PostPreview";

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

type BlogPageProps = {
  data: Data;
};

const BlogPage = ({ data }: BlogPageProps) => {
  const posts = data.allMarkdownRemark.edges;
  return (
    <Layout location="blog">
      <div className="flex justify-center p-5">
        <div className="w-1/2 flex flex-col gap-5">
          {posts.map((post) => (
            <Link to={`/blog/${post.node.frontmatter.slug}`}>
              <PostPreview
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

export default BlogPage;
