module.exports = {
  ci: {
    collect: {
      startServerCommand: "yarn dev",
      numberOfRuns: 5,
      url: ["http://localhost:3000"],
      settings: { preset: "desktop" },
    },
    upload: {
      target: "filesystem",
      outputDir: "./lhci_reports",
      reportFilenamePattern: "%%PATHNAME%%-%%DATETIME%%-report.%%EXTENSION%%",
    },
  },
};
