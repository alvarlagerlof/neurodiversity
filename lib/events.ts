import fs from "fs-extra";
import matter from "gray-matter";

import { Event, EventAndPage, EventSectioned } from "../types";
import { getPageBySlug } from "./pages";

const baseDir = process.cwd() + "/content/events/";

async function getAllEvents(): Promise<Event[]> {
  const files: string[] = await fs.readdir(baseDir);

  return await Promise.all<Event>(
    files.map(async (fileName) => {
      const slug = fileName.replace(".mdx", "");

      const fileContent = await fs.readFile(baseDir + fileName);
      const { data } = matter(fileContent);

      return { slug, frontMatter: { ...data } } as Event;
    })
  );
}

async function getMapppedWithPage(): Promise<EventAndPage[]> {
  const events = await getAllEvents();

  return await Promise.all(
    events.map(async (event) => {
      try {
        return {
          event,
          page: await getPageBySlug(event.frontMatter.linkedPage),
        } as EventAndPage;
      } catch {
        return {
          event,
        } as EventAndPage;
      }
    })
  );
}

async function getSectioned(): Promise<EventSectioned> {
  const mapped = await getMapppedWithPage();

  return mapped.reduce((accumulator: EventSectioned, current: EventAndPage) => {
    // console.log(
    //   current.event.frontMatter.startDate,
    //   new Date(current.event.frontMatter.startDate),
    //   new Date(current.event.frontMatter.startDate).getMonth(),
    //   current.event.slug
    // );

    // JS month starts at index 0
    const month = new Date(current.event.frontMatter.startDate).getMonth() + 1;

    return {
      ...accumulator,
      [month]: accumulator[month] ? [...accumulator[month], current] : [current],
    } as EventSectioned;
  }, {} as EventSectioned);
}

export { getSectioned };
