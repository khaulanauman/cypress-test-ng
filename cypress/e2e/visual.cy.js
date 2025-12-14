describe("SauceDemo - Visual Regression", () => {

  it("Inventory page visual snapshot", () => {
    cy.visit("/");
    cy.login("standard_user", "secret_sauce");

    cy.compareSnapshot("inventory-page", 0.0);
  });

});
