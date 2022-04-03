export interface Page {
  slug: string;
  content: string;
  frontMatter: {
    name: string;
    explaination: string;
    meta: {
      title: string;
      description: string;
    };
    published: boolean;
  };
}
