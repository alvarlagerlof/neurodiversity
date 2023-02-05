import Meta from "components/Meta";

export default function IndexHead() {
  return (
    <>
      <Meta
        appendTitle={false}
        image={{
          title: "Neurodiversity Wiki",
          description:
            "Learn about Autism, OCD, Bipolar, ADHD, Dyslexia and more on this crowdsourced guide.",
        }}
        imageLayout="start"
        tags={{
          title: "Neurodiversity Wiki: Learn about neurological conditions",
          description:
            "Learn about conditions like Autism, OCD, Bipolar, ADHD and more on this crowdsourced guide.",
        }}
      />
    </>
  );
}
