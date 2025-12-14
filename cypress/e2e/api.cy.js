describe("SauceDemo - API Test Demo", () => {

  it("Validates login page response", () => {
    cy.request("https://www.saucedemo.com").then((response) => {
      expect(response.status).to.eq(200);
    });
  });

});
