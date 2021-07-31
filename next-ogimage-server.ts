import fs, { promises } from "fs";
import path from "path";
import chrome from "chrome-aws-lambda";
import puppeteer, { Browser } from "puppeteer-core";
import { spawn, ChildProcessWithoutNullStreams } from "child_process";

import config from "./next-ogimage.config";

type Route = `/${string}`;

type Meta = {
  title: string;
  description: string;
};

(async () => {
  const server = await getServer();
  const browser = await getBrowser();
  const routes = await getRoutes();

  await Promise.all(
    routes.map(async (route) => {
      await capturePage(browser, route);
    })
  );

  browser.close();
  server.kill();
})();

async function getServer(): Promise<ChildProcessWithoutNullStreams> {
  console.log("Starting server");

  const server = spawn("yarn", ["start", "-p", config.devServerPort]);

  return new Promise((resolve, reject) => {
    server.stdout.on("data", (data) => {
      if (data.toString().includes("ready - started server on")) {
        resolve(server);
      }
    });

    server.stderr.on("data", (data) => {
      reject(`stderr: ${data}`);
    });

    server.on("error", (error) => {
      reject(`error: ${error.message}`);
    });

    server.on("close", (code) => {
      reject(`child process exited with code ${code}`);
    });
  });
}

async function getBrowser(): Promise<Browser> {
  console.log("Starting browser");

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

function getPath(...pathSegment: string[]): string {
  return path.resolve(process.cwd(), ...pathSegment);
}

async function readJson(path): Promise<object> {
  const file = await promises.readFile(path);
  return JSON.parse(file.toString());
}

function filterRoutes(routes: Route[]): Route[] {
  const builtIn = (route: Route): boolean => {
    return !["/_app", "/_error", "/500", "/404", ...config.ignorePaths].includes(route);
  };
  const dynamic = (route: Route): boolean => {
    return !/\/\[.*\]/.test(route);
  };

  return routes.filter(builtIn).filter(dynamic);
}

async function getRoutes(): Promise<Route[]> {
  const MANIFESETS = {
    prerender: await readJson(getPath("./.next/prerender-manifest.json")),
    build: await readJson(getPath("./.next/build-manifest.json")),
  };

  const staticRoutes: Route[] = Object.keys(MANIFESETS.build.pages).map((key) => {
    return key as Route;
  });

  const dynamicRoutes: Route[] = Object.keys(MANIFESETS.prerender.routes).map((key) => {
    return key as Route;
  });

  return filterRoutes([...staticRoutes, ...dynamicRoutes]);
}

function routeToFilename(route: Route): string {
  if (route === "/") return "index";

  return route.replace("/", "");
}

function getBaseUrl(): string {
  return `http://localhost:${config.devServerPort}`;
}

function getLayoutUrl(meta: Meta): string {
  const base = getBaseUrl();
  const title = encodeURIComponent(meta.title);
  const description = encodeURIComponent(meta.description);

  return `${base}${config.layoutPath}/?title=${title}&description=${description}`;
}

async function getMeta(browser: Browser, route: Route): Promise<Meta> {
  const page = await browser.newPage();

  const base = getBaseUrl();
  const url = `${base}${route}`;

  await page.goto(url, {
    waitUntil: "networkidle0",
  });

  return new Promise(async (resolve, reject) => {
    try {
      let title = await page.evaluate(() => {
        const selector = document.head.querySelector("title");
        if (!selector) throw new Error("No title tag found");

        const content = selector.textContent;
        if (!content) throw new Error("No title content found");

        return content;
      });

      let description = await page.evaluate(() => {
        const selector = document.head.querySelector('meta[name="description"]');
        if (!selector) throw new Error("No description tag found");

        const content = selector.getAttribute("content");
        if (!content) throw new Error("No description content found");

        return content;
      });

      await page.close();
      resolve({
        title,
        description,
      });
    } catch (e) {
      await page.close();
      reject(e);
    }
  });
}

async function capturePage(browser: Browser, route: Route) {
  await getMeta(browser, route)
    .then(async () => {
      const url = getLayoutUrl(await getMeta(browser, route));

      const page = await browser.newPage();

      await page.setViewport({
        width: 2000,
        height: 1200,
      });

      await page.goto(url, {
        waitUntil: "networkidle0",
      });

      if (!fs.existsSync(getPath(getOutputFolderPath()))) {
        await promises.mkdir(getPath(getOutputFolderPath()));
      }

      await page.screenshot({
        type: "png",
        path: `${getOutputFolderPath()}/${routeToFilename(route)}.png`,
      });

      console.log("Captured:", route);
      await page.close();
    })
    .catch((e) => {
      console.error("Error on route:", route, e.message);
    });
}

function getOutputFolderPath() {
  return `public/${config.publicOutputFolder}`;
}

export {};
