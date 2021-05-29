module.exports = {
  siteUrl: "https://neurodiversity.wiki",
  generateRobotsTxt: true,
  transform: (config, path) => {
    if (path == "/") {
      return {
        loc: path,
        changefreq: config.changefreq,
        priority: 1,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      };
    }
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};
