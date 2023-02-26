export async function GET() {
  return new Response(`User-agent: *
  Allow: /

  Sitemap: https://neurodiversity.wiki/sitemap.xml`);
}
