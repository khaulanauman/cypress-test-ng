describe("SauceDemo - Login (Data Driven)", () => {

  beforeEach(() => {
    cy.visit("/");
  });

  it("Logs in using fixture data", () => {
    cy.fixture("users").then((users) => {
      cy.login(users.validUser.username, users.validUser.password);
      cy.url().should("include", "/inventory.html");
    });
  });

});
