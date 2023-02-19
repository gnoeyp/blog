const PAGES = ["main", "blog", "til"] as const;
export type PageName = typeof PAGES[number];

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
