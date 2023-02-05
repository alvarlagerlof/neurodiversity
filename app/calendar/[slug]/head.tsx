import { allEvents } from ".contentlayer/generated";
import Meta from "components/Meta";

export default function CalendarHead({ params }: { params: { slug: string } }) {
  const event = allEvents.find((event) => event.slug == params.slug);

  if (!event) return null;

  return (
    <>
      <Meta
        appendTitle={true}
        image={{
          title: `When is ${event.name}?`,
          description: `Starting on ${event.startDate}. Learn more here.`,
        }}
        tags={{
          title: `When is ${event.name}?`,
          description: `${event.name} is an event starting on ${event.startDate}. Learn more here.`,
        }}
      />
    </>
  );
}
