import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import { renderAst } from "../utils";
import type { Node } from "unist";
import Tag from "../../components/Tag";

type BlogPostTemplateProps = {
  data: {
    markdownRemark: {
      frontmatter: {
        date: string;
        slug: string;
        title: string;
        tags: string[];
      };
      htmlAst: Node;
    };
  };
};

const BlogPostTemplate = ({
  data, // this prop will be injected by the GraphQL query below.
}: BlogPostTemplateProps) => {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, htmlAst } = markdownRemark;

  return (
    <Layout location="blog">
      <div className="min-w-1/2 max-w-4xl m-auto px-8">
        <h1 className="text-3xl">{frontmatter.title}</h1>
        {frontmatter.tags.map((tag) => (
          <Tag size="small">{tag}</Tag>
        ))}
        <span className="text-sm text-gray-500">{frontmatter.date}</span>
        <div className="py-3">{renderAst(htmlAst)}</div>
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      htmlAst
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        tags
      }
    }
  }
`;

export default BlogPostTemplate;
