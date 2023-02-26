"use client";

import { Bounce } from "app/components/Bounce";
import { Typography } from "app/components/Typography";
import { allPages, Event } from "contentlayer/generated";
import Link from "next/link";
import { useRef } from "react";

import { Tag } from "../Tag";

export function EventItem({ event }: { event: Event }) {
  const page = allPages.find(
    (page) => page.slug === event.condition?.linkedPage
  );

  const link = useRef<HTMLAnchorElement | null>(null);

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
    if (page && page.meta) {
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
          if (link.current && link.current !== e.target) {
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
