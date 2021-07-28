export default function OgImage({ title, description }) {
  return (
    <div className="w-[2000px] h-[1200px] bg-new-secondary py-32 px-40 flex flex-col justify-between">
      <img src="/logos/logomark.svg" className="w-[900px]" />
      <div className="space-y-10">
        <h1 className="text-[9em] font-displaynew leading-none">{title}</h1>
        <h2 className="text-7xl font-content leading-tight font-medium">
          {description}
        </h2>
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
