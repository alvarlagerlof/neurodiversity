export default function OgImage({ title, description }) {
  return (
    <div className="w-[2000px] h-[1200px] bg-secondary py-52 px-32 flex flex-col justify-between">
      <img
        src="/logos/neurodiversity/logomark.svg"
        className="w-[900px]"
        alt=""
      />
      <div className="space-y-8">
        <h1 className="text-[11em] font-display leading-none">{title}</h1>
        <h2 className="text-[5.2em] font-medium leading-snug">{description}</h2>
      </div>
    </div>
  );
}

export async function getServerSideProps({ query }) {
  return {
    props: {
      ...query,
    },
  };
}
