import Header from "components/Header";
import Typography from "components/Typography";
import Meta from "components/Meta";
import PreviewBanner from "components/PreviewBanner";
import Wrapper from "components/Wrapper";
import ContentInset from "components/ContentInset";
import VerticalSpacer from "components/VerticalSpacer";
import Main from "components/Main";

import Link from "components/InternalLink";
import { Event, EventSectioned, Page } from "types";
import Tag from "components/Tag";
import { getSectioned } from "lib/events";

interface CalendarProps {
  events: EventSectioned;
}

export default function Calendar({ events }: CalendarProps) {
  return (
    <Wrapper>
      <Meta
        appendTitle={true}
        image={{
          title: "Awareness Calendar",
          description: "TODO",
        }}
        imageLayout="start"
        tags={{
          title: "Awareness Calendar",
          description: "TODO",
        }}
      />

      <ContentInset size="normal">
        <VerticalSpacer>
          <PreviewBanner googleDocUrl="https://docs.google.com/document/d/1hKr_t99hzFR3Foj1SLzUSLy6NbOYDJ2Es18DwZdUm0Q/edit?usp=sharing" />

          <Header>
            <Typography.Title>Neurological Awareness Calendar</Typography.Title>
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
      <ul className="space-y-4">
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
      let description = page.frontMatter.meta.description;
      const lastSentence = description.split(". ").at(-1);
      const firstWord = lastSentence.split(" ").at(0);

      if (firstWord == "Learn") {
        const sentences = description.split(". ");
        description = sentences.slice(0, -1).join() + ".";
      }
      return description;
    }

    return "There's no description or page about this event yet.";
  };

  return (
    <li
      className="
        h-full rounded-xl p-4 bg-white ring-primary transition
        space-y-2
        -mx-4
        shadow"
    >
      <div className="flex flex-row justify-between">
        <Typography.Heading>{event.frontMatter.name}</Typography.Heading>
        <div>
          {event.frontMatter.length == "week" && <Tag>Week, starting {day}</Tag>}
          {event.frontMatter.length == "day" && <Tag>{day}</Tag>}
          {event.frontMatter.length == "month" && <Tag>Whole month</Tag>}
        </div>
      </div>

      <p>{description()}</p>

      {event.frontMatter.linkedPage && (
        <div className="mt-2">
          <Link href={event.frontMatter.linkedPage}>Learn more</Link>
        </div>
      )}
    </li>
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
