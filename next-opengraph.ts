import fs, { promises } from "fs";
import path from "path";
import chrome from "chrome-aws-lambda";
import puppeteer, { Browser } from "puppeteer-core";

process.env.NEXT_PUBLIC_VERCEL_URL = "rebrand.neurodiversity.wiki";

type Route = {
  path: string;
  meta: {
    title: string;
    description: string;
  };
};

function getPath(...pathSegment: string[]): string {
  return path.resolve(process.cwd(), ...pathSegment);
}

async function readJson(path) {
  const file = await promises.readFile(path);
  return JSON.parse(file.toString());
}

async function getRoutes(): Promise<Route[]> {
  const manifests = {
    PRERENDER: await readJson(getPath("./.next/prerender-manifest.json")),
    BUILD: await readJson(getPath("./.next/build-manifest.json")),
  };

  const routes: Route[] = Object.keys(manifests.PRERENDER.routes).map((key) => {
    return {
      path: key.replace("/", ""),
      meta: {
        title: key,
        description: key,
      },
    };
  });

  return routes;
}

async function generate() {
  const browser = await getBrowser();
  const routes = await getRoutes();

  routes.forEach(async (route) => {
    await capturePage(browser, route);
  });
}

async function getBrowser(): Promise<Browser> {
  const options = process.env.AWS_REGION
    ? {
        args: chrome.args,
        executablePath: await chrome.executablePath,
        headless: chrome.headless,
      }
    : {
        args: [],
        executablePath:
          process.platform === "win32"
            ? "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe"
            : process.platform === "linux"
            ? "/usr/bin/google-chrome"
            : "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
      };
  return await puppeteer.launch(options);
}

async function capturePage(browser: Browser, route: Route) {
  const url = `https://${
    process.env.NEXT_PUBLIC_VERCEL_URL
  }/ogimage/?title=${encodeURIComponent(
    route.meta.title
  )}&description=${encodeURIComponent(route.meta.description)}`;

  const page = await browser.newPage();
  await page.setViewport({ width: 2000, height: 1200 });
  await page.goto(url, { waitUntil: "networkidle0" });

  if (!fs.existsSync(getPath("./public/ogimages")))
    await promises.mkdir(getPath("./public/ogimages"));

  await page.screenshot({
    type: "png",
    path: `./public/ogimages/${route.path}.png`,
  });
}

generate();
