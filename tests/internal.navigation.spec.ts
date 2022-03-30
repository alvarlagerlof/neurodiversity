import { test, expect } from "@playwright/test";

test.describe("internal navigation", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/");
  });

  test("should navigate to the Autism page", async ({ page }) => {
    await page.locator("text=ASD").click();

    await expect(page).toHaveURL("http://localhost:3000/autism");
    await expect(page.locator("h1")).toContainText("What is Autism?");
  });

  test("should navigate to the DID page", async ({ page }) => {
    await page.locator("text=DID").click();

    await expect(page).toHaveURL("http://localhost:3000/did");
    await expect(page.locator("h1")).toContainText("What is DID?");
  });

  test("should navigate to the OCD page", async ({ page }) => {
    await page.locator("text=OCD").click();

    await expect(page).toHaveURL("http://localhost:3000/ocd");
    await expect(page.locator("h1")).toContainText("What is OCD?");
  });

  test("should navigate to the join page", async ({ page }) => {
    await page.locator("text=Find out more").click();

    await expect(page).toHaveURL("http://localhost:3000/join");
    await expect(page.locator("h1")).toContainText("Join us");
  });

  test("it should nagiate back on nav click", async ({ page }) => {
    await page.locator("texd=ASD").click();
    await page.locator("nav img >> nth=0");

    expect(page).toHaveURL("http://localhost:3000/");
  });
});
