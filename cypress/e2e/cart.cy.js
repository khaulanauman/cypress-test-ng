describe("SauceDemo - Cart Flow", () => {

  beforeEach(() => {
    cy.visit("/");
    cy.login("standard_user", "secret_sauce");
  });

  it("Adds product to cart", () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get(".shopping_cart_badge").should("contain", "1");
  });

});
