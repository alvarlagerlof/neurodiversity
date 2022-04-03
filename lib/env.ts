import getRepoInfo from "git-repo-info";

export default async function isPreview() {
  if (process.env.VERCEL !== undefined) {
    return process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF !== "main";
  } else {
    return getRepoInfo().branch !== "main";
  }
}
