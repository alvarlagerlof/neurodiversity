import { test, expect } from "@playwright/test";

test.describe("basic navigation", () => {
  test("should navigate to the Autism page", async ({ page }) => {
    await page.goto("http://localhost:3000/");
    await page.locator("text=ASD").click();

    await expect(page).toHaveURL("http://localhost:3000/autism");
    await expect(page.locator("h1")).toContainText("What is Autism?");
  });

  test("should navigate to the DID page", async ({ page }) => {
    await page.goto("http://localhost:3000/");
    await page.locator("text=DID").click();

    await expect(page).toHaveURL("http://localhost:3000/did");
    await expect(page.locator("h1")).toContainText("What is DID?");
  });

  test("should navigate to the OCD page", async ({ page }) => {
    await page.goto("http://localhost:3000/");
    await page.locator("text=OCD").click();

    await expect(page).toHaveURL("http://localhost:3000/ocd");
    await expect(page.locator("h1")).toContainText("What is OCD?");
  });

  test("should navigate to the join page", async ({ page }) => {
    await page.goto("http://localhost:3000/");
    await page.locator("text=Find out more").click();

    await expect(page).toHaveURL("http://localhost:3000/join");
    await expect(page.locator("h1")).toContainText("Join us");
  });
});

test.describe("social links", () => {
  test.describe("discord", () => {
    test("should navigate discord invite on start page", async ({ page }) => {
      await page.goto("http://localhost:3000/");
      await page.locator("text=Join Discord server").click();

      await expect(page).toHaveURL("https://discord.com/invite/48kqk6KcZ8");
    });

    test("should navigate discord invite on join page", async ({ page }) => {
      await page.goto("/join");
      await page.locator("text=Join Discord server").click();

      await expect(page).toHaveURL("https://discord.com/invite/48kqk6KcZ8");
    });

    test("should navigate discord invite from footer", async ({ page }) => {
      await page.goto("http://localhost:3000/");
      await page.locator("footer section div section > div > div a:nth-child(3)").click();

      await expect(page).toHaveURL("https://discord.com/invite/48kqk6KcZ8");
    });
  });

  test.describe("others medias", () => {
    test("should navigate twitter from footer", async ({ page }) => {
      await page.goto("http://localhost:3000/");
      await page.locator("footer section div section > div > div a:nth-child(1)").click();

      await expect(page).toHaveURL("https://twitter.com/n12ywiki");
    });

    test("should navigate github from footer", async ({ page }) => {
      await page.goto("http://localhost:3000/");
      await page.locator("footer section div section > div > div a:nth-child(2)").click();

      await expect(page).toHaveURL("https://github.com/alvarlagerlof/neurodiversity");
    });

    test("should navzigate mailto from footer", async ({ page }) => {
      await page.goto("http://localhost:3000/");
      const link = await page.locator(
        "footer section div section > div > div a:nth-child(4)"
      );

      await expect(link).toHaveAttribute("href", "mailto:contact@neurodiversity.wiki");
    });
  });
});
