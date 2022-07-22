import { DateTime } from "luxon";

import Header from "components/Header";
import Typography from "components/Typography";
import Meta from "components/Meta";
import Section from "components/Section";
import PreviewBanner from "components/PreviewBanner";
import Wrapper from "components/Wrapper";
import ContentInset from "components/ContentInset";
import VerticalSpacer from "components/VerticalSpacer";
import Main from "components/Main";

import ExternalLink from "components/ExternalLink";
import { Event, EventSectioned } from "types";
import { getPublishedPages } from "lib/content";
import Tag from "components/Tag";

// import isPreview from "lib/env";

// This page cannot be .mdx because then there is no way to run getServerSideProps which are needed for redirecting from notocd.com and notautism.com

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
          {/* <PreviewBanner googleDocUrl="https://docs.google.com/document/d/1hKr_t99hzFR3Foj1SLzUSLy6NbOYDJ2Es18DwZdUm0Q/edit?usp=sharing" /> */}

          <Header>
            <Typography.Title>Neurological Awareness Calendar</Typography.Title>
            <Typography.Subtitle>
              Throughout the year, there are months, weeks and days where various
              neurological conditions are highlighted to spread awareness. Here’s a
              calendar of the ones covered on this site.
            </Typography.Subtitle>
          </Header>

          <Main>
            {/* <Section
              className={`
              h-full space-x-2 rounded-xl p-4 bg-white ring-primary transition
              -mx-4
              shadow`}
            > */}
            <ul className="space-y-8">
              {Object.entries(events)
                .sort((a: any, b: any) => a[0] - b[0])
                .map(([month, events]) => {
                  const date = new Date(2000, parseInt(month), 0); // 2009-11-10
                  const monthName = date.toLocaleString("default", { month: "long" });

                  return (
                    <li key={month}>
                      <Typography.Title as="h2">{monthName}</Typography.Title>
                      <ul className="space-y-4">
                        {events.map((event) => {
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

                          const day = formatOrdinals(new Date(event.startDate).getDay());

                          return (
                            <li
                              key={event.name}
                              className="
                                h-full space-x-2 rounded-xl p-4 bg-white ring-primary transition
                                -mx-4
                                shadow"
                            >
                              <div className="ml-2 mb-2">
                                {event.length == "day" && <Tag>{day}</Tag>}
                                {event.length == "week" && (
                                  <Tag>Week, starting {day}</Tag>
                                )}
                                {event.length == "month" && <Tag>Whole month</Tag>}
                              </div>

                              <Typography.Heading>{event.name}</Typography.Heading>
                              <p className="mb-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Accusantium, fugiat molestiae. Iure, ab nisi suscipit
                                commodi optio, qui.
                              </p>
                              <ExternalLink href="">Learn more</ExternalLink>
                            </li>
                          );
                        })}
                      </ul>
                    </li>
                  );
                })}
            </ul>
            {/* </Section> */}
          </Main>
        </VerticalSpacer>
      </ContentInset>
    </Wrapper>
  );
}

export async function getStaticProps({ params }) {
  const publishedPages = await getPublishedPages();
  const events = publishedPages
    .filter((page) => page.frontMatter.event)
    .map((page) => page.frontMatter.event);

  const sectioned = events.reduce((acc: EventSectioned, curr: Event) => {
    const date = new Date(curr.startDate);
    const month = date.getMonth();

    return {
      ...acc,
      [month]: acc[month] ? [...acc[month], curr] : [curr],
    };
  }, {});

  return {
    props: {
      events: sectioned,
    },
  };
}
