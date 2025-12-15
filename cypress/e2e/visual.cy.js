describe("Visual Regression - Login Page", () => {
  it("matches login page snapshot", () => {
    cy.visit("https://www.saucedemo.com");
    cy.compareSnapshot("login-page");
  });
});
