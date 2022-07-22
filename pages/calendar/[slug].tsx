import Header from "components/Header";
import Typography from "components/Typography";
import Meta from "components/Meta";
import DocLinkBanner from "components/DocLinkBanner";
import Wrapper from "components/Wrapper";
import ContentInset from "components/ContentInset";
import VerticalSpacer from "components/VerticalSpacer";
import Main from "components/Main";

import { Event, EventAndPage, Page } from "types";
import { getAllEvents, getEventBySlug } from "lib/events";
import { getPageBySlug } from "lib/pages";
import Section from "components/Section";
import removeLearnMore from "lib/removeLearnMore";
import Button from "components/Button";
import Link from "next/link";

export default function CalendarEvent({ event, page }: EventAndPage) {
  return (
    <Wrapper>
      <Meta
        appendTitle={true}
        image={{
          title: `${event.frontMatter.name}`,
          description: `Event starting on ${event.frontMatter.startDate}`,
        }}
        tags={{
          title: `When is ${event.frontMatter.name}?`,
          description: `${event.frontMatter.name} is an event starting on ${event.frontMatter.startDate}`,
        }}
      />

      <ContentInset size="normal">
        <VerticalSpacer>
          <Header>
            <Typography.Title>{event.frontMatter.name}</Typography.Title>
            <Subtitle event={event} />
          </Header>

          <Main>
            <Organization event={event} />
            <About event={event} page={page} />
            {/* Not Google doc currently */}
            {/* <DocLinkBanner url="https://docs.google.com/document/d/1hKr_t99hzFR3Foj1SLzUSLy6NbOYDJ2Es18DwZdUm0Q/edit?usp=sharing" /> */}
          </Main>
        </VerticalSpacer>
      </ContentInset>
    </Wrapper>
  );
}

function Subtitle({ event }: { event: Event }) {
  const date = new Date(event.frontMatter.startDate);
  const monthName = new Intl.DateTimeFormat("en-us", { month: "long" }).format(date);
  const monthAndDay = new Intl.DateTimeFormat("en-us", {
    month: "long",
    day: "numeric",
  }).format(date);

  switch (event.frontMatter.length) {
    case "day":
      return <Typography.Subtitle>On {monthAndDay}</Typography.Subtitle>;
    case "week":
      return <Typography.Subtitle>Week starting {monthAndDay}</Typography.Subtitle>;
    case "month":
      return <Typography.Subtitle>Month of {monthName}</Typography.Subtitle>;
  }
}

function Organization({ event }: { event: Event }) {
  return (
    <Section>
      <div className="flex flex-col sm:flex-row-reverse justify-between">
        {event.frontMatter.organization && event.frontMatter.organization.logo && (
          <img
            className="object-contain bg-white mb-4 sm:mb-0 sm:ml-8"
            src={event.frontMatter.organization.logo}
            width={200}
          />
        )}
        <div>
          {event.frontMatter.organization ? (
            <>
              <Typography.Heading>
                {event.frontMatter.organization.name}
              </Typography.Heading>
              <Typography.Body>
                {event.frontMatter.name} was started by{" "}
                {event.frontMatter.organization.name}.
              </Typography.Body>
              <Link href={event.frontMatter.organization.website} passHref>
                <Button as="a" target="_blank" rel="noreferrer">
                  Visit official website
                </Button>
              </Link>
            </>
          ) : (
            <>
              <Typography.Heading>Organization behind the event</Typography.Heading>
              <Typography.Body>
                There's currently no infromation about the organization behind this event.
                If you're interested in contributing, please check out the banner below.
              </Typography.Body>
            </>
          )}
        </div>
      </div>
    </Section>
  );
}

function About({ event, page }: EventAndPage) {
  if (event.frontMatter.condition) {
    return (
      <Section>
        <Typography.Heading>About {event.frontMatter.condition.name}</Typography.Heading>
        {page ? (
          <>
            <Typography.Body>
              {removeLearnMore(page.frontMatter.meta.description)}
            </Typography.Body>
            <Link href={`/${event.frontMatter.condition.linkedPage}`} passHref>
              <Button as="a">Learn more</Button>
            </Link>
          </>
        ) : (
          <>
            <Typography.Body>
              Neurodiversity Wiki does not yet have a page about{" "}
              {event.frontMatter.condition.name}. If you're interested in helping create
              one, consider joining us. More information is in the banner below.
            </Typography.Body>
          </>
        )}
      </Section>
    );
  }
}

export async function getStaticProps({ params }) {
  const event = await getEventBySlug(params.slug);

  try {
    const page = await getPageBySlug(event.frontMatter.condition.linkedPage);
    return {
      props: {
        event,
        page,
      },
    };
  } catch {
    return {
      props: {
        event,
      },
    };
  }
}

export async function getStaticPaths() {
  const pages = await getAllEvents();

  return {
    paths: pages.map((page) => {
      return {
        params: {
          slug: page.slug,
        },
      };
    }),
    fallback: false,
  };
}
