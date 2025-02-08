import { Metadata } from "next";
import Image from "next/image";

import { DocLinkBanner } from "../components/DocLinkBanner";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { Typography } from "../components/Typography";
import { EventItem } from "./components/EventItem";
import newIcon from "./icons/new.svg";
import { allEvents, Event } from ".contentlayer/generated";

export const metadata: Metadata = {
  title: "Neurological Awareness Calendar - Neurodiversity Wiki",
  description:
    "Throughout the year, there are months, weeks and days where various neurological conditions are highlighted to spread awareness. This is a calendar of some of them.",
  openGraph: {
    title: "Neurological Awareness Calendar",
    description: "By Neurodiversity Wiki",
    images: `https://${
      process.env.NEXT_PUBLIC_VERCEL_URL
    }/api/og/default?title=${encodeURIComponent(
      "Neurological Awareness Calendar",
    )}&description=${encodeURIComponent("By Neurodiversity Wiki")}`,
  },
};

export default function CalendarPage() {
  const sectionedEvents = allEvents.reduce((accumulator, current: Event) => {
    // JS month starts at index 0
    const month = new Date(current.startDate).getMonth() + 1;

    return {
      ...accumulator,
      [month]: accumulator[month]
        ? [...accumulator[month], current]
        : [current],
    };
  }, {}) as Record<string, Event[]>;

  return (
    <>
      <Header>
        <div className="w-full flex flex-row justify-end h-14 sm:h-0 sm:relative">
          <Image
            src={newIcon}
            alt="star shaped banner saying new"
            className="absolute sm:-top-6 sm:right-0 rotate-[15deg]"
          />
        </div>
        <Typography.Title>
          <span className="italic font-medium text-xl">
            The Neurodiversity Wiki
          </span>
          <br />
          Neurological Awareness Calendar
        </Typography.Title>
        <Typography.Subtitle>
          Throughout the year, there are months, weeks and days where various
          neurological conditions are highlighted to spread awareness. Here’s a
          calendar of the ones covered on this site.
        </Typography.Subtitle>
      </Header>

      <Main>
        <ul className="space-y-8">
          {Object.entries(sectionedEvents)
            // @ts-expect-error TODO
            .sort((a: unknown, b: unknown) => a[0] - b[0])
            .map(([month, events]) => {
              return <Month key={month} month={month} events={events} />;
            })}
        </ul>

        <DocLinkBanner url="https://docs.google.com/document/d/1hKr_t99hzFR3Foj1SLzUSLy6NbOYDJ2Es18DwZdUm0Q/edit?usp=sharing" />
      </Main>
    </>
  );
}

function Month({ month, events }: { month: string; events: Event[] }) {
  const date = new Date(2000, parseInt(month), 0); // 2009-11-10
  const monthName = date.toLocaleString("default", { month: "long" });

  return (
    <li>
      <Typography.Title as="h2">{monthName}</Typography.Title>
      <ul className="space-y-4 md:-mx-4">
        {events.map((event) => {
          return <EventItem key={event._id} event={event} />;
        })}
      </ul>
    </li>
  );
}
