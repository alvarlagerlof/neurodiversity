import { test, expect } from "@playwright/test";

const targetUrl = process.env.ENVIRONMENT_URL;

test.describe("basic flow", () => {
  // Donation button is hidden
  // test("it should open the dropdown and close when clicking", async ({ page }) => {
  //   await page.goto(targetUrl;

  //   const menuButton = await page.locator("#menu-button");
  //   await menuButton.click();
  //   await expect(menuButton).toHaveAttribute("aria-expanded", "true");

  //   await menuButton.click();
  //   await expect(menuButton).toHaveAttribute("aria-expanded", "false");
  // });

  test("should navigate to the Autism page", async ({ page }) => {
    await page.goto(targetUrl);

    await page.locator("text=ASD").click();

    await expect(page).toHaveURL(`${targetUrl}/autism`);
    await expect(page.locator("h1")).toContainText("What is Autism?");
  });

  test("it should open and close the definition when clicking", async ({ page }) => {
    await page.goto(`${targetUrl}/asd`);

    const dt = await page.locator("dt >> nth=0");
    const dd = await page.locator("dd >> nth=0");

    const button = await page.locator("section button >> nth=0");

    await dt.click();
    await expect(button).toHaveAttribute("aria-expanded", "true");

    await dt.click();
    await expect(button).toHaveAttribute("aria-expanded", "false");
  });

  test("it should go to the join page and click the discord link", async ({ page }) => {
    await page.goto(targetUrl);

    const button = await page.locator("text=Join Discord server");
    await button.evaluate(async (element) => await element.removeAttribute("target"));
    await button.click();

    await page.waitForLoadState("networkidle");

    await expect(page).toHaveURL("https://discord.com/invite/48kqk6KcZ8");
  });
});
