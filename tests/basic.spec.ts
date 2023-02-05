import { test, expect } from "@playwright/test";

test.describe("basic flow", () => {
  test("should navigate to the Autism page", async ({ page }) => {
    await page.goto(process.env.ENVIRONMENT_URL);

    await page.locator("text=ASD").click();

    await expect(page).toHaveURL(`${process.env.ENVIRONMENT_URL}/autism`);
    await expect(page.locator("h1")).toContainText("What is Autism?");
  });

  test("it should open and close the definition when clicking", async ({ page }) => {
    await page.goto(`${process.env.ENVIRONMENT_URL}/asd`);

    const dt = await page.locator("dt >> nth=0");
    const dd = await page.locator("dd >> nth=0");

    const button = await page.locator("section button >> nth=0");

    await dt.click();
    await expect(button).toHaveAttribute("aria-expanded", "true");

    await dt.click();
    await expect(button).toHaveAttribute("aria-expanded", "false");
  });

  test("it should go to the join page and click the discord link", async ({ page }) => {
    await page.goto(`${process.env.ENVIRONMENT_URL}`);

    const button = await page.locator("text=Join Discord server");
    await button.evaluate(async (element) => await element.removeAttribute("target"));
    await button.click();

    await page.waitForLoadState("networkidle");

    await expect(page).toHaveURL("https://discord.com/invite/48kqk6KcZ8");
  });
});
