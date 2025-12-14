describe("Search Products - Data Driven", () => {
  const products = ["Backpack", "Bike Light", "Jacket"];

  beforeEach(() => {
    cy.login("standard_user", "secret_sauce");
  });

  products.forEach((item) => {
    it(`Search product: ${item}`, () => {
      cy.contains(".inventory_item", item).should("be.visible");
    });
  });
});
