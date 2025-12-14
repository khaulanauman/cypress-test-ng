import "cypress-visual-regression/dist/command";
import "./commands";

Cypress.on('uncaught:exception', (err, runnable) => {
  // prevents third-party JS errors from failing tests
  return false;
});
