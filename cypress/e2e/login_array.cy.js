describe("Login - Array Data Driven Test", () => {
  const users = [
    { username: "standard_user", password: "secret_sauce" },
    { username: "problem_user", password: "secret_sauce" },
    { username: "performance_glitch_user", password: "secret_sauce" }
  ];

  beforeEach(() => {
    cy.visit("/");
  });

  users.forEach((user) => {
    it(`Login test for ${user.username}`, () => {
      cy.login(user.username, user.password);
      cy.url().should("include", "/inventory.html");
      cy.logout();
    });
  });
});
