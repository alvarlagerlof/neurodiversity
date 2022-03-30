import { test, expect } from "@playwright/test";

test.describe("dropdown", () => {
  test("it should open and close when clicking", async ({ page }) => {
    await page.goto("http://localhost:3000/");

    const menuButton = await page.locator("#menu-button");
    menuButton.click();
    await expect(menuButton).toHaveAttribute("aria-expanded", "true");

    menuButton.click();
    await expect(menuButton).toHaveAttribute("aria-expanded", "false");
  });
});
