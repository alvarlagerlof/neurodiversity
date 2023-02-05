"use client";

import DocLinkBanner from "../../components/DocLinkBanner";
import Header from "../../components/Header";
import Typography from "../../components/Typography";

import Main from "../../components/Main";
import { useRef } from "react";
import { allEvents, allPages, Event } from ".contentlayer/generated";

import Tag from "../../components/Tag";
import Bounce from "../../components/Bounce";
import Link from "next/link";

export const metadata = {
  title: "The Neurological Awareness Calendar",
  description:
    "Throughout the year, there are months, weeks and days where various neurological conditions are highlighted to spread awareness. This is a calendar of some of them.",
  openGraph: {
    // title: "The Neurological Awareness Calendar",
    // description: "Throughout the year, there are months, weeks and days where various neurological conditions are highlighted to spread awareness. This is a calendar of some of them."
    url: `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`,
    siteName: "Neurodiversity Wiki",
    images: [
      {
        url: `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/og/default`,
      },
    ],
  },
};

export default function CalendarPage() {
  const sectionedEvents = allEvents.reduce((accumulator, current: Event) => {
    // JS month starts at index 0
    const month = new Date(current.startDate).getMonth() + 1;

    return {
      ...accumulator,
      [month]: accumulator[month] ? [...accumulator[month], current] : [current],
    };
  }, {}) as Record<string, Event[]>;

  return (
    <>
      <Header>
        <div className="w-full flex flex-row justify-end h-14 sm:h-0 sm:relative">
          <img
            src="/icons/new.svg"
            alt="star shaped banner saying new"
            className="absolute sm:-top-6 sm:right-0 rotate-[15deg]"
          />
        </div>
        <Typography.Title>
          <span className="italic font-medium text-xl">The Neurodiversity Wiki</span>
          <br />
          Neurological Awareness Calendar
        </Typography.Title>
        <Typography.Subtitle>
          Throughout the year, there are months, weeks and days where various neurological
          conditions are highlighted to spread awareness. Here’s a calendar of the ones
          covered on this site.
        </Typography.Subtitle>
      </Header>

      <Main>
        <ul className="space-y-8">
          {Object.entries(sectionedEvents)
            .sort((a: any, b: any) => a[0] - b[0])
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
          return <Event key={event._id} event={event} />;
        })}
      </ul>
    </li>
  );
}

function Event({ event }: { event: Event }) {
  const page = allPages.find((page) => page.slug === event.condition?.linkedPage);

  const link = useRef(null);

  // Format date day
  const pr = new Intl.PluralRules("en-US", { type: "ordinal" });

  const suffixes = new Map([
    ["one", "st"],
    ["two", "nd"],
    ["few", "rd"],
    ["other", "th"],
  ]);
  const formatOrdinals = (n) => {
    const rule = pr.select(n);
    const suffix = suffixes.get(rule);
    return `${n}${suffix}`;
  };

  const day = formatOrdinals(new Date(event.startDate).getDate());

  // Remove CTA text since there is a button below
  const description = () => {
    if (page) {
      return page.meta.description;
    }

    if (event.condition && event.condition.name) {
      return `There's no description of ${event.condition.name} yet.`;
    }

    return `There's no description yet.`;
  };

  return (
    <Bounce amount={1.04} className="w-full">
      <li
        onClick={(e) => {
          if (link.current !== e.target) {
            link.current.click();
          }
        }}
        className={`
              rounded-xl p-4 bg-white dark:bg-card-dark ring-primary transition
              shadow
              space-y-2
              hover:shadow-md
              outline-none focus-visible:ring cursor-pointer`}
      >
        <div className="flex flex-row justify-between">
          {/* <Typography.Heading>{event.frontMatter.name}</Typography.Heading> */}
          <Typography.Heading>
            <Link href={`/calendar/${event.slug}`} ref={link}>
              {event.name}
            </Link>
          </Typography.Heading>
          <div>
            {event.length == "week" && <Tag>Week starting {day}</Tag>}
            {event.length == "day" && <Tag>{day}</Tag>}
            {event.length == "month" && <Tag>Whole month</Tag>}
          </div>
        </div>

        <p>{description()}</p>
      </li>
    </Bounce>
  );
}
