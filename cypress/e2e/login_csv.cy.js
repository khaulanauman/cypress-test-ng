describe("Login - CSV Data Driven Test", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Login using CSV data", () => {
    cy.readFile("cypress/fixtures/users.csv").then((data) => {
      const rows = data.split("\n");

      rows.slice(1).forEach((row) => {
        if (!row.trim()) return; // ✅ prevents trim error

        const [username, password] = row.split(",");

        cy.login(username.trim(), password.trim());
        cy.url().should("include", "/inventory.html");
        cy.logout();
      });
    });
  });
});
