import { createFilePath } from "gatsby-source-filesystem";

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({ node, getNode }).replace(/\//g, "");

    createNodeField({
      name: "slug",
      node,
      value: slug,
    });
  }
};
