import { test, expect } from "@playwright/test";

test.describe("external navigation", () => {
  test("should navigate to discord invite on start page", async ({ page }) => {
    await page.goto("http://localhost:3000/");
    await page.locator("text=Join Discord server").click();

    await expect(page).toHaveURL("https://discord.com/invite/48kqk6KcZ8");
  });

  test("should navigate to discord invite on join page", async ({ page }) => {
    await page.goto("/join");
    await page.locator("text=Join Discord server").click();

    await expect(page).toHaveURL("https://discord.com/invite/48kqk6KcZ8");
  });

  test("should navigate to discord invite from footer", async ({ page }) => {
    await page.goto("http://localhost:3000/");
    await page.locator("footer section div section > div > div a:nth-child(3)").click();

    await expect(page).toHaveURL("https://discord.com/invite/48kqk6KcZ8");
  });

  test("should navigate to twitter from footer", async ({ page }) => {
    await page.goto("http://localhost:3000/");
    await page.locator("footer section div section > div > div a:nth-child(1)").click();

    await expect(page).toHaveURL("https://twitter.com/n12ywiki");
  });

  test("should navigate to github from footer", async ({ page }) => {
    await page.goto("http://localhost:3000/");
    await page.locator("footer section div section > div > div a:nth-child(2)").click();

    await expect(page).toHaveURL("https://github.com/alvarlagerlof/neurodiversity");
  });

  test("should navzigate to mailto from footer", async ({ page }) => {
    await page.goto("http://localhost:3000/");
    const link = await page.locator(
      "footer section div section > div > div a:nth-child(4)"
    );

    await expect(link).toHaveAttribute("href", "mailto:contact@neurodiversity.wiki");
  });
});
