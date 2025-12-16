describe("SauceDemo - Visual Regression", () => {
  beforeEach(() => {
    cy.viewport(1440, 900);
    cy.visit("/");

    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();

    cy.url().should("include", "/inventory.html");
    cy.get(".inventory_list").should("be.visible");
  });

  it("Inventory page matches baseline", () => {
    cy.compareSnapshot("saucedemo-inventory");
  });

  it("Cart page matches baseline", () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get(".shopping_cart_link").click();

    cy.url().should("include", "/cart.html");
    cy.get(".cart_list").should("be.visible");

    cy.compareSnapshot("saucedemo-cart");
  });
});
