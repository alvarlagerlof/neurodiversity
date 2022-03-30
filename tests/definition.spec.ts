import { test, expect } from "@playwright/test";

test.describe("definition", () => {
  test("it should open and close when clicking", async ({ page }) => {
    await page.goto("http://localhost:3000/asd");

    const dt = await page.locator("dt >> nth=0");
    const dd = await page.locator("dd >> nth=0");

    const button = await page.locator("section button >> nth=0");

    dt.click();
    await expect(button).toHaveAttribute("aria-expanded", "true");

    dt.click();
    await expect(button).toHaveAttribute("aria-expanded", "false");
  });
});
