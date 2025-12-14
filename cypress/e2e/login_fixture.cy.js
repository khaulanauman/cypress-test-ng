describe("Login - Fixture Data Driven Test", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Login using fixture data", () => {
    cy.fixture("users").then((users) => {
      users.forEach((user) => {
        cy.login(user.username, user.password);
        cy.url().should("include", "/inventory.html");
        cy.logout();
      });
    });
  });
});
