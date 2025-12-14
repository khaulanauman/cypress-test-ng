describe("API Mocking using cy.intercept()", () => {

  beforeEach(() => {
    cy.visit("/");
  });

  it("Mocks a backend API request", () => {

    // Intercept an existing network request
    cy.intercept(
      "POST",
      "**/api/unique-events/submit*",
      {
        statusCode: 200,
        body: { success: true }
      }
    ).as("mockAnalytics");

    // Perform login (UI only)
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();

    // Wait for mocked request
    cy.wait("@mockAnalytics");

    // Validate navigation
    cy.url().should("include", "/inventory.html");
  });
});
