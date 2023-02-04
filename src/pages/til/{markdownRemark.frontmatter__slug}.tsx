import React, { ComponentProps } from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import rehypeReact from "rehype-react";
import { unified } from "unified";
import { Root } from "rehype-react/lib";
import type { Node } from "unist";

const H1 = (props: ComponentProps<"h1">) => (
  <h1 className="text-2xl leading-relaxed" {...props} />
);

const H2 = (props: ComponentProps<"h2">) => (
  <h2 className="text-xl leading-relaxed" {...props} />
);

const H3 = (props: ComponentProps<"h3">) => (
  <h3 className="text-lg leading-relaxed" {...props} />
);

const H4 = (props: ComponentProps<"h4">) => (
  <h4 className="text-base leading-relaxed" {...props} />
);

const H5 = (props: ComponentProps<"h5">) => (
  <h5 className="text-sm leading-relaxed" {...props} />
);

const H6 = (props: ComponentProps<"h6">) => (
  <h6 className="text-xs leading-relaxed" {...props} />
);

const P = (props: ComponentProps<"p">) => (
  <p className="text-base" {...props} />
);

const processor = unified().use(rehypeReact, {
  createElement: React.createElement,
  components: {
    h1: H1,
    h2: H2,
    h3: H3,
    h4: H4,
    h5: H5,
    h6: H6,
    p: P,
    del: (props: any) => <del {...props} />,
    blockquote: (props: any) => <blockquote {...props} />,
    ul: (props: any) => <ul {...props} />,
    ol: (props: any) => <ol {...props} />,
    hr: (props: any) => <hr {...props} />,
    a: (props: any) => <a {...props} />,
    em: (props: any) => <em {...props} />,
    strong: (props: any) => <strong {...props} />,
  },
});

const renderAst = (ast: Node): JSX.Element => {
  return processor.stringify(ast as Root);
};

const BlogPostTemplate = ({
  data, // this prop will be injected by the GraphQL query below.
}: any) => {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, htmlAst } = markdownRemark;

  return (
    <Layout location="til">
      <div>
        <h1 className="text-2xl">{frontmatter.title}</h1>
        <h2 className="text-sm text-gray-500">{frontmatter.date}</h2>
        {renderAst(htmlAst)}
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
      }
    }
  }
`;

export default BlogPostTemplate;
