import React, { ComponentProps } from "react";
import rehypeReact from "rehype-react";
import { unified } from "unified";
import { Root } from "rehype-react/lib";
import type { Node } from "unist";

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
  },
});

export const renderAst = (ast: Node): JSX.Element => {
  return processor.stringify(ast as Root);
};
