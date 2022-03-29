import getRepoInfo from "git-repo-info";

async function getCurrentBranch() {
  if (isInVercel()) {
    return process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF;
  } else {
    return getRepoInfo().branch;
  }
}

function isInVercel() {
  return process.env.VERCEL !== undefined;
}

async function isPreview() {
  return (await getCurrentBranch()) !== "main";
}

export { isPreview };
