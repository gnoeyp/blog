import React, { useState } from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import PostPreview from "../components/PostPreview";
import { includesArray, removeDuplicatesInArray } from "../utils";
import Tag from "../components/Tag";

type Data = {
  allMarkdownRemark: {
    edges: {
      node: {
        id: number;
        frontmatter: {
          date: string;
          slug: string;
          title: string;
          tags?: string[];
        };
      };
    }[];
  };
};

type BlogPageProps = {
  data: Data;
};

const BlogPage = ({ data }: BlogPageProps) => {
  const [checkedTags, setCheckedTags] = useState<string[]>([]);

  const posts = data.allMarkdownRemark.edges;
  const tags = removeDuplicatesInArray(
    posts.reduce<string[]>(
      (result, post) =>
        post.node.frontmatter.tags
          ? [...result, ...post.node.frontmatter.tags]
          : result,
      []
    )
  );

  const handleClickTag = (tag: string) => {
    checkedTags.includes(tag)
      ? setCheckedTags(checkedTags.filter((checkedTag) => checkedTag !== tag))
      : setCheckedTags([...checkedTags, tag]);
  };

  const filteredPosts =
    checkedTags.length > 0
      ? posts.filter((post) =>
          includesArray(post.node.frontmatter.tags || [], checkedTags)
        )
      : posts;

  return (
    <Layout location="blog">
      <div className="flex flex-col items-center p-5 w-1/2 m-auto">
        <div className="flex justify-start py-3 w-full">
          {tags.map((tag) => (
            <Tag
              checked={checkedTags.includes(tag)}
              onClick={() => handleClickTag(tag)}
            >
              {tag}
            </Tag>
          ))}
        </div>
        <div className="w-full flex flex-col gap-5">
          {filteredPosts.map((post) => (
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
            tags
          }
        }
      }
    }
  }
`;

export default BlogPage;
