import getRepoInfo from "git-repo-info";

async function getCurrentBranch() {
  if (isInVercel()) {
    return process.env.VERCEL_GIT_COMMIT_REF;
  } else {
    return getRepoInfo().branch;
  }
}

function isInVercel() {
  return process.env.VERCEL !== undefined;
}

async function isMain() {
  return (await getCurrentBranch()) === "main";
}

function isProd() {
  return process.env.NODE_ENV === "production";
}

async function isPreview() {
  return (
    (await getCurrentBranch()) === "preview" ||
    (await getCurrentBranch()).startsWith("continuous/")
  );
}

export { isMain, isProd, isPreview };
