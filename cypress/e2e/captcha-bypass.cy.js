describe("Token-Based Authentication (Captcha Bypass)", () => {
  it("logs in via API and stores token", () => {
    cy.request({
      method: "POST",
      url: "https://fakestoreapi.com/auth/login",
      body: {
        username: "mor_2314",
        password: "83r5^_",
      },
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      expect(res.status).to.be.oneOf([200, 201]);
      expect(res.body).to.have.property("token");

      const token = res.body.token;

      // store token for later use
      Cypress.env("AUTH_TOKEN", token);

      // simulate authenticated session
      cy.window().then((win) => {
        win.localStorage.setItem("authToken", token);
      });
    });
  });
});
