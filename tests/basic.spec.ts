import { test, expect } from "@playwright/test";

const baseUrl = process.env.ENVIRONMENT_URL;
if (typeof baseUrl !== "string")
  throw new Error("ENVIRONMENT_URL is not defined.");

test.describe("basic flow", () => {
  test("should navigate to the Autism page", async ({ page }) => {
    await page.goto(baseUrl);

    await page.locator("text=ASD").click();

    await expect(page).toHaveURL(`${baseUrl}/autism`);
    await expect(page.locator("h1")).toContainText("What is Autism?");
  });

  test("it should open and close the definition when clicking", async ({
    page,
  }) => {
    await page.goto(`${baseUrl}/asd`);

    const dt = await page.locator("dt >> nth=0");
    const dd = await page.locator("dd >> nth=0");

    const button = await page.locator("section button >> nth=0");

    await dt.click();
    await expect(button).toHaveAttribute("aria-expanded", "true");

    await dt.click();
    await expect(button).toHaveAttribute("aria-expanded", "false");
  });

  test("it should go to the join page and click the discord link", async ({
    page,
  }) => {
    await page.goto(`${baseUrl}`);

    const button = await page.locator("text=Join Discord server");
    await button.evaluate(
      async (element) => await element.removeAttribute("target")
    );
    await button.click();

    await page.waitForLoadState("networkidle");

    await expect(page).toHaveURL("https://discord.com/invite/48kqk6KcZ8");
  });
});
