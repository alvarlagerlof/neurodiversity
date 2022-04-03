import ExternalLink from "./ExternalLink";

export default function PreviewBanner({ googleDocUrl }: { googleDocUrl: string }) {
  if (process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF !== "main") {
    return (
      <div className="bg-white p-4 lg:-mx-4 rounded-xl shadow max-w-3xl mb-8 w-full">
        <strong>This is a preview page</strong>
        <p className="mb-2">
          The contents of this page is not complete. Do not share the url widely.
        </p>
        <ExternalLink href={googleDocUrl}>Share feedback here</ExternalLink>
      </div>
    );
  }

  return null;
}
