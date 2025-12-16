import "cypress-visual-regression/dist/command";
import "./commands";
const { addCompareSnapshotCommand } = require("cypress-visual-regression/dist/command");

Cypress.on('uncaught:exception', (err, runnable) => {
  // prevents third-party JS errors from failing tests
  return false;
});

addCompareSnapshotCommand({
  capture: "fullPage",
  errorThreshold: 0.01, // allow 1% difference
});