import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Main } from "../../components/Main";
import { Typography } from "../../components/Typography";
import { allEvents, allPages, Event } from ".contentlayer/generated";

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const event = allEvents.find((event) => event.slug == params.slug);

  if (!event) return null;

  return {
    title: `When is ${event.name}? - Neurodiversity.wiki`,
    description: `${event.name} is an event starting on ${event.startDate}. Learn more here.`,
    openGraph: {
      title: `When is ${event.name}? - Neurodiversity.wiki`,
      description: `Starting on ${event.startDate}. Learn more here.`,
      images: `https://${
        process.env.NEXT_PUBLIC_VERCEL_URL
      }/api/og/default?title=${encodeURIComponent(
        `When is ${event.name}? - Neurodiversity.wiki`
      )}&description=${encodeURIComponent(
        `Starting on ${event.startDate}. Learn more here.`
      )}`,
    },
  };
}

export default function CalendarEvent({ params }) {
  const event = allEvents.find((event) => event.slug === params.slug);

  if (!event) notFound();

  return (
    <>
      <Header>
        <Typography.Title>{event.name}</Typography.Title>
        <Subtitle event={event} />
      </Header>

      <Main>
        <Organization event={event} />
        <About event={event} />
        {/* Not Google doc currently */}
        {/* <DocLinkBanner url="https://docs.google.com/document/d/1hKr_t99hzFR3Foj1SLzUSLy6NbOYDJ2Es18DwZdUm0Q/edit?usp=sharing" /> */}
      </Main>
    </>
  );
}

function Subtitle({ event }: { event: Event }) {
  const date = new Date(event.startDate);
  const monthName = new Intl.DateTimeFormat("en-us", { month: "long" }).format(
    date
  );
  const monthAndDay = new Intl.DateTimeFormat("en-us", {
    month: "long",
    day: "numeric",
  }).format(date);

  switch (event.length) {
    case "day":
      return <Typography.Subtitle>On {monthAndDay}</Typography.Subtitle>;
    case "week":
      return (
        <Typography.Subtitle>Week starting {monthAndDay}</Typography.Subtitle>
      );
    case "month":
      return <Typography.Subtitle>Month of {monthName}</Typography.Subtitle>;
  }
}

function Organization({ event }: { event: Event }) {
  return (
    <section>
      <div className="flex flex-col sm:flex-row-reverse justify-between">
        {event.organization && event.organization.logo && (
          <Image
            className="object-contain bg-white mb-4 sm:mb-0 sm:ml-8"
            src={event.organization.logo}
            width={200}
            height={200}
            alt={`Logo of ${event.organization.logo}`}
            unoptimized
          />
        )}
        <div>
          {event.organization ? (
            <>
              <Typography.Heading>{event.organization.name}</Typography.Heading>
              <Typography.Body>
                {event.name} was started by {event.organization.name}.
              </Typography.Body>
              <Button
                as={Link}
                href={event.organization.website}
                target="_blank"
                rel="noreferrer"
              >
                Visit official website
              </Button>
            </>
          ) : (
            <>
              <Typography.Heading>
                Organization behind the event
              </Typography.Heading>
              <Typography.Body>
                There's currently no information about the organization behind
                this event. If you're interested in contributing, please check
                out the banner below.
              </Typography.Body>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

function About({ event }: { event: Event }) {
  const page = allPages.find(
    (page) => page.slug === event.condition?.linkedPage
  );

  if (event.condition) {
    return (
      <section>
        <Typography.Heading>About {event.condition.name}</Typography.Heading>
        {page ? (
          <>
            <Typography.Body>{page.meta.description}</Typography.Body>
            <Button as={Link} href={`/${event.condition.linkedPage}`}>
              Learn more
            </Button>
          </>
        ) : (
          <>
            <Typography.Body>
              Neurodiversity pWiki does not yet have a page about{" "}
              {event.condition.name}. If you're interested in helping create
              one, consider joining us. More information is in the banner below.
            </Typography.Body>
          </>
        )}
      </section>
    );
  }
}

export function generateStaticParams() {
  return allEvents.map((event) => ({
    slug: event.slug,
  }));
}
