import Header from "components/Header";
import Typography from "components/Typography";
import Meta from "components/Meta";
import DocLinkBanner from "components/DocLinkBanner";
import Wrapper from "components/Wrapper";
import ContentInset from "components/ContentInset";
import VerticalSpacer from "components/VerticalSpacer";
import Main from "components/Main";

import { Event, EventSectioned, Page } from "types";
import Tag from "components/Tag";
import { getSectioned } from "lib/events";
import removeLearnMore from "lib/removeLearnMore";
import { useRef } from "react";
import Bounce from "components/Bounce";
import Link from "next/link";

interface CalendarProps {
  events: EventSectioned;
}

export default function Calendar({ events }: CalendarProps) {
  return (
    <Wrapper>
      <Meta
        appendTitle={true}
        image={{
          title: "Neurological Awareness Calendar",
          description: "By Neurodiversity Wiki",
        }}
        tags={{
          title: "The Neurological Awareness Calendar",
          description: "By Neurodiversity Wiki",
        }}
      />

      <ContentInset size="normal">
        <VerticalSpacer>
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
              Throughout the year, there are months, weeks and days where various
              neurological conditions are highlighted to spread awareness. Here’s a
              calendar of the ones covered on this site.
            </Typography.Subtitle>
          </Header>

          <Main>
            <ul className="space-y-8">
              {Object.entries(events)
                .sort((a: any, b: any) => a[0] - b[0])
                .map(([month, events]) => {
                  return <Month key={month} month={month} events={events} />;
                })}
            </ul>

            <DocLinkBanner url="https://docs.google.com/document/d/1hKr_t99hzFR3Foj1SLzUSLy6NbOYDJ2Es18DwZdUm0Q/edit?usp=sharing" />
          </Main>
        </VerticalSpacer>
      </ContentInset>
    </Wrapper>
  );
}

function Month({ month, events }) {
  const date = new Date(2000, parseInt(month), 0); // 2009-11-10
  const monthName = date.toLocaleString("default", { month: "long" });

  return (
    <li>
      <Typography.Title as="h2">{monthName}</Typography.Title>
      <ul className="space-y-4 md:-mx-4">
        {events.map((data) => {
          return (
            <Event
              key={data.event.frontMatter.name}
              event={data.event}
              page={data.page}
            />
          );
        })}
      </ul>
    </li>
  );
}

function Event({ event, page }: { event: Event; page: Page }) {
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

  const day = formatOrdinals(new Date(event.frontMatter.startDate).getDate());

  // Remove CTA text since there is a button below
  const description = () => {
    if (page) {
      return removeLearnMore(page.frontMatter.meta.description);
    }

    if (event.frontMatter.condition && event.frontMatter.condition.name) {
      return `There's no description of ${event.frontMatter.condition.name} yet.`;
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
              rounded-xl p-4 bg-white ring-primary transition
              shadow
              space-y-2
              hover:shadow-md
              outline-none focus-visible:ring cursor-pointer`}
      >
        <div className="flex flex-row justify-between">
          {/* <Typography.Heading>{event.frontMatter.name}</Typography.Heading> */}
          <Typography.Heading>
            <Link href={`/calendar/${event.slug}`} passHref>
              <a ref={link}>{event.frontMatter.name}</a>
            </Link>
          </Typography.Heading>
          <div>
            {event.frontMatter.length == "week" && <Tag>Week, starting {day}</Tag>}
            {event.frontMatter.length == "day" && <Tag>{day}</Tag>}
            {event.frontMatter.length == "month" && <Tag>Whole month</Tag>}
          </div>
        </div>

        <p>{description()}</p>
      </li>
    </Bounce>
  );
}

export async function getStaticProps() {
  const sectioned = await getSectioned();

  return {
    props: {
      events: sectioned,
    },
  };
}
