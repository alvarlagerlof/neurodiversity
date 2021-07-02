import fs from "fs-extra";
import matter from "gray-matter";

const baseDir = process.cwd() + "/content/";

async function getPageBySlug(slug) {
  const fileContent = await fs.readFile(baseDir + slug + ".mdx");
  const { content, data } = matter(fileContent);

  return {
    frontMatter: { ...data },
    content,
  };
}

async function getAllPages() {
  const files = await fs.readdir(baseDir);

  return await Promise.all(
    files.map(async (fileName) => {
      const slug = fileName.replace(".mdx", "");

      const fileContent = await fs.readFile(baseDir + fileName);
      const { data } = matter(fileContent);

      return { slug, frontMatter: { ...data } };
    })
  );
}

async function getPublishedPages() {
  const pages = await getAllPages();
  return pages.filter((page) => page.frontMatter.published);
}

async function getPreviewPages() {
  const pages = await getAllPages();
  return pages.filter((page) => !page.frontMatter.published);
}

export { getPageBySlug, getAllPages, getPublishedPages, getPreviewPages };
