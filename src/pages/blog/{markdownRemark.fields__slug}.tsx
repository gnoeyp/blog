import React, { ComponentProps } from "react";
import { graphql } from "gatsby";
import type { Node } from "unist";
import Tag from "../../components/Tag";
import rehypeReact from "rehype-react";
import { unified } from "unified";
import { Root } from "rehype-react/lib";

const H1 = (props: ComponentProps<"h1">) => (
  <h1 className="text-2xl leading-loose" {...props} />
);

const H2 = (props: ComponentProps<"h2">) => (
  <h2 className="text-xl leading-loose" {...props} />
);

const H3 = (props: ComponentProps<"h3">) => (
  <h3 className="text-lg leading-loose" {...props} />
);

const H4 = (props: ComponentProps<"h4">) => (
  <h4 className="text-base leading-loose" {...props} />
);

const H5 = (props: ComponentProps<"h5">) => (
  <h5 className="text-sm leading-loose" {...props} />
);

const H6 = (props: ComponentProps<"h6">) => (
  <h6 className="text-xs leading-loose" {...props} />
);

const P = (props: ComponentProps<"p">) => (
  <p className="text-base mb-3" {...props} />
);

const Ul = (props: ComponentProps<"ul">) => (
  <ul className="pl-5 list-disc" {...props} />
);

const Ol = (props: ComponentProps<"ol">) => (
  <ol className="pl-5 list-decimal" {...props} />
);

const A = (props: ComponentProps<"a">) => (
  <a className="text-blue-600 visited:text-purple-600" {...props} />
);

const Blockquote = (props: ComponentProps<"blockquote">) => (
  <blockquote
    className="italic border-l-8 border-gray-200 px-3 py-1 bg-gray-50"
    {...props}
  />
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
    ul: Ul,
    ol: Ol,
    p: P,
    a: A,
    blockquote: Blockquote,
  },
});

export const renderAst = (ast: Node): JSX.Element => {
  return processor.stringify(ast as Root);
};

type BlogPostTemplateProps = {
  data: {
    markdownRemark: {
      fields: {
        slug: string;
      };
      frontmatter: {
        date: string;
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
    <div className="min-w-1/2 max-w-4xl m-auto px-8">
      <h1 className="text-3xl dark:text-gray-100">{frontmatter.title}</h1>
      <div className="flex gap-1">
        {frontmatter.tags.map((tag, index) => (
          <Tag key={index} size="small">
            {tag}
          </Tag>
        ))}
      </div>
      <span className="text-sm text-gray-500 dark:text-gray-300">
        {frontmatter.date}
      </span>
      <div className="py-3 dark:text-gray-100 leading-relaxed">
        {renderAst(htmlAst)}
      </div>
    </div>
  );
};

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      htmlAst
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
`;

export default BlogPostTemplate;
