//using custom commands
describe("SauceDemo - Login using Custom Command", () => {

  beforeEach(() => {
    cy.visit("/");
  });

  it("Logs in successfully", () => {
    cy.login("standard_user", "secret_sauce");
    cy.url().should("include", "/inventory.html");
  });

});
