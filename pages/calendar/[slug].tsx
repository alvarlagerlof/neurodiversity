import Header from "components/Header";
import Typography from "components/Typography";
import Meta from "components/Meta";
import PreviewBanner from "components/PreviewBanner";
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
  const title = `When is ${event.frontMatter.name}?`;

  return (
    <Wrapper>
      <Meta
        appendTitle={true}
        image={{
          title: title,
          description: "TODO",
        }}
        imageLayout="start"
        tags={{
          title: title,
          description: "TODO",
        }}
      />

      <ContentInset size="normal">
        <VerticalSpacer>
          <PreviewBanner googleDocUrl="https://docs.google.com/document/d/1hKr_t99hzFR3Foj1SLzUSLy6NbOYDJ2Es18DwZdUm0Q/edit?usp=sharing" />

          <Header>
            <Typography.Title>{event.frontMatter.name}</Typography.Title>
            <Subtitle event={event} />
          </Header>

          <Main>
            <Organisation event={event} />
            <About event={event} page={page} />
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

function Organisation({ event }: { event: Event }) {
  return (
    <Section>
      {/* <img
                  className="rounded-lg mb-4"
                  src="https://iocdf.org/wp-content/uploads/2010/10/logo-og.png"
                  width={200}
                /> */}
      <Typography.Heading>Organisation behind event</Typography.Heading>
      {event.frontMatter.organization ? (
        <>
          <Typography.Body>
            {event.frontMatter.name} was started by {event.frontMatter.organization.name}.
          </Typography.Body>
          <Link href="" passHref>
            <Button as="a">Visit official website</Button>
          </Link>
        </>
      ) : (
        <Typography.Body>
          There's currently no infromation about the organisation behind this event. If
          you're interested in helping out, please check out the banner below.
        </Typography.Body>
      )}
    </Section>
  );
}

function About({ event, page }: EventAndPage) {
  if (event.frontMatter.conditionName) {
    return (
      <Section>
        <Typography.Heading>About {event.frontMatter.conditionName}</Typography.Heading>
        {page ? (
          <>
            <Typography.Body>
              {removeLearnMore(page.frontMatter.meta.description)}
            </Typography.Body>
            <Link href={`/${event.frontMatter.linkedPage}`} passHref>
              <Button as="a">Learn more</Button>
            </Link>
          </>
        ) : (
          <>
            <Typography.Body>
              Neurodiversity Wiki does not yet have a page about{" "}
              {event.frontMatter.conditionName}. If you're interested in helping create
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
    const page = await getPageBySlug(event.frontMatter.linkedPage);
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
