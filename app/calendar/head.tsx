import { Meta } from "../components/Meta";

export default function CalendarHead() {
  return (
    <>
      <Meta
        appendTitle={true}
        image={{
          title: "Neurological Awareness Calendar",
          description: "By Neurodiversity Wiki",
        }}
        tags={{
          title: "The Neurological Awareness Calendar",
          description:
            "Throughout the year, there are months, weeks and days where various neurological conditions are highlighted to spread awareness. This is a calendar of some of them.",
        }}
      />
    </>
  );
}
