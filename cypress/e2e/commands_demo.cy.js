describe("Cypress Commands Demonstration - SauceDemo", () => {

  // Runs once before all tests
  before(() => {
    cy.log("Starting Cypress command demonstration");
  });

  // Runs before each test
  beforeEach(() => {
    cy.visit("/");
  });

  it("Uses core Cypress commands", () => {

    // get + type
    cy.get('[data-test="username"]')
      .type("standard_user")
      .should("have.value", "standard_user");

    // get + type
    cy.get('[data-test="password"]')
      .type("secret_sauce")
      .should("have.value", "secret_sauce");

    // contains + click
    cy.contains("Login").click();

    // wait (explicit wait for demonstration)
    cy.wait(1000);

    // should (assert URL)
    cy.url().should("include", "/inventory.html");

    // get + find
    cy.get(".inventory_list")
      .find(".inventory_item")
      .should("have.length.at.least", 1);

    // contains inside element
    cy.get(".inventory_item")
      .first()
      .contains("Add to cart")
      .click();

    // trigger (mouseover demo)
    cy.get("#react-burger-menu-btn")
      .trigger("mouseover")
      .click();

    // contains + click
    cy.contains("Logout").click();

    // should (assert logout)
    cy.url().should("eq", "https://www.saucedemo.com/");
  });

});
