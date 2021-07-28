export default function OgImage({ title, description }) {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{description}</h2>
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
