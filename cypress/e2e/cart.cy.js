//reusing same commands from commands.js file
describe("SauceDemo - Cart using Custom Commands", () => {

  beforeEach(() => {
    cy.visit("/");
    cy.login("standard_user", "secret_sauce");
  });

  it("Adds multiple products to cart", () => {
    cy.addToCart("Sauce Labs Backpack");
    cy.addToCart("Sauce Labs Bike Light");

    cy.verifyCartCount(2);
  });

  it("Logs out using reusable command", () => {
    cy.logout();
    cy.url().should("eq", "https://www.saucedemo.com/");
  });

});
