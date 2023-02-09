export type Location = "main" | "blog";

export type Post = {
  id: number;
  fields: {
    slug: string;
  };
  slug: string;
  frontmatter: {
    date: string;
    title: string;
    tags?: string[];
  };
};
