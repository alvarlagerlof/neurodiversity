import fs from "fs-extra";
import matter from "gray-matter";

import { Page } from "../types";

const baseDir = process.cwd() + "/content/";

async function getPageBySlug(slug): Promise<Page> {
  const fileContent = await fs.readFile(baseDir + slug + ".mdx");
  const { content, data } = matter(fileContent);

  return {
    frontMatter: { ...data },
    content,
  } as Page;
}

async function getAllPages(): Promise<Partial<Page>[]> {
  const files: string[] = await fs.readdir(baseDir);

  return await Promise.all<Partial<Page>>(
    files.map(async (fileName) => {
      const slug = fileName.replace(".mdx", "");

      const fileContent = await fs.readFile(baseDir + fileName);
      const { data } = matter(fileContent);

      return { slug, frontMatter: { ...data } } as Partial<Page>;
    })
  );
}

async function getPublishedPages(): Promise<Partial<Page>[]> {
  const pages = await getAllPages();
  return pages.filter((page) => page.frontMatter.published);
}

async function getPreviewPages(): Promise<Partial<Page>[]> {
  const pages = await getAllPages();
  return pages.filter((page) => !page.frontMatter.published);
}

export { getPageBySlug, getAllPages, getPublishedPages, getPreviewPages };
