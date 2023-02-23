import path from "path";
import { createFilePath } from "gatsby-source-filesystem";

export const onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({ node, getNode });

    createNodeField({
      name: "slug",
      node,
      value: slug,
    });
  }
};

export const createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    console.log(node.fields.slug);
    createPage({
      path: node.fields.slug,
      component: path.resolve("./src/templates/post.tsx"),
      context: {
        slug: node.fields.slug,
      },
    });
  });
};
