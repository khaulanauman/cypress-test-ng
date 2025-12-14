describe("Sending API Requests using cy.request()", () => {

  it("GET request - Fetch posts", () => {
    cy.request("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.length.greaterThan(0);
        expect(response.body[0]).to.have.property("title");
      });
  });

  it("POST request - Create a post", () => {
    cy.request("POST", "https://jsonplaceholder.typicode.com/posts", {
      title: "Cypress API Test",
      body: "This is a test post",
      userId: 1
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.title).to.eq("Cypress API Test");
    });
  });

});
