const config = {
  projectName: "My First Checkly Project",
  logicalId: "checkly-project-1",
  checks: {
    activated: true,
    muted: false,
    runtimeId: "2022.10",
    frequency: 5,
    locations: ["us-east-1", "eu-west-1"],
  },
};

module.exports = config;
