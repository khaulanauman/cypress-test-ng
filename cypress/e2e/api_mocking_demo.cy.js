describe("API Mocking Demonstration using cy.intercept()", () => {

  it("Mocks a backend API response", () => {

    cy.intercept("GET", "/api/products", {
      statusCode: 200,
      body: {
        products: [
          { id: 1, name: "Backpack" },
          { id: 2, name: "Bike Light" }
        ]
      }
    }).as("getProducts");

    // Trigger fake request manually
    cy.window().then((win) => {
      win.fetch("/api/products");
    });

    // Wait for mocked API
    cy.wait("@getProducts")
      .its("response.statusCode")
      .should("eq", 200);
  });

});
