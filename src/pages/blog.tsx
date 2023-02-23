import React, { useState } from "react";
import { graphql, Link } from "gatsby";
import PostPreview from "../components/PostPreview";
import { includesArray, removeDuplicatesInArray } from "../utils";
import Tag from "../components/Tag";
import Search from "../components/Search";
import { Post } from "../types";

type BlogPageProps = {
  data: {
    allMarkdownRemark: {
      edges: {
        node: Post;
      }[];
    };
  };
};

const BlogPage = ({ data }: BlogPageProps) => {
  const [checkedTags, setCheckedTags] = useState<string[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");

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

  const filteredPosts = posts
    .filter((post) =>
      includesArray(post.node.frontmatter.tags || [], checkedTags)
    )
    .filter((post) =>
      post.node.frontmatter.title
        .toLowerCase()
        .includes(searchValue.toLowerCase())
    );

  return (
    <div className="flex flex-col items-center p-5 w-1/2 m-auto">
      <Search value={searchValue} onChange={setSearchValue} />
      <div className="flex gap-2 justify-start py-3 w-full">
        {tags.map((tag) => (
          <Tag
            key={tag}
            clickable
            checked={checkedTags.includes(tag)}
            onClick={() => handleClickTag(tag)}
          >
            {tag}
          </Tag>
        ))}
      </div>
      <div className="w-full flex flex-col gap-5">
        {filteredPosts.map((post) => (
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
      filter: { fileAbsolutePath: { regex: "/content/blog/" } }
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

export default BlogPage;
