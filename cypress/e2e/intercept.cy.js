describe("SauceDemo - Network Intercept", () => {

  it("Intercepts inventory request", () => {
    cy.visit("/");
    cy.login("standard_user", "secret_sauce");

    cy.intercept("GET", "**/inventory**").as("inventoryCall");

    cy.wait("@inventoryCall").its("response.statusCode").should("eq", 200);
  });

});
