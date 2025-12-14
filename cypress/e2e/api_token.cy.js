describe("API Token Authentication Demo", () => {

  it("Requests token using API", () => {
    cy.request({
      method: "POST",
      url: "https://httpbin.org/post",
      body: {
        username: "standard_user",
        password: "secret_sauce"
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

});
