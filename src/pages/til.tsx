import React, { useState } from "react";
import { graphql, Link } from "gatsby";
import PostPreview from "../components/PostPreview";
import Search from "../components/Search";
import { Post } from "../types";

type TilPageProps = {
  data: {
    allMarkdownRemark: {
      edges: {
        node: Post;
      }[];
    };
  };
};

const TilPage = ({ data }: TilPageProps) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const posts = data.allMarkdownRemark.edges;
  console.log(posts);

  return (
    <div className="flex flex-col items-center p-5 w-1/2 m-auto">
      <Search value={searchValue} onChange={setSearchValue} />
      <div className="w-full flex flex-col gap-5">
        {posts.map((post) => (
          <Link key={post.node.id} to={post.node.fields.slug}>
            <PostPreview
              title={post.node.frontmatter.title}
              date={post.node.frontmatter.date}
              tags={post.node.frontmatter.tags}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export const query = graphql`
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
`;

export default TilPage;
