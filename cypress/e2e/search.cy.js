describe("SauceDemo - Product Search (Keyword Match)", () => {
  const USER = "standard_user";
  const PASS = "secret_sauce";

  beforeEach(() => {
    cy.visit("/");
  });

  const login = () => {
    cy.get('[data-test="username"]').clear().type(USER);
    cy.get('[data-test="password"]').clear().type(PASS);
    cy.get('[data-test="login-button"]').click();
    cy.url().should("include", "/inventory.html");
  };

  it('Searches for a product keyword (e.g., "backpack") and validates relevant items', () => {
    login();

    const keyword = "backpack";

    // Grab all inventory items and filter by keyword (name or description)
    cy.get(".inventory_item").then(($items) => {
      const matches = [...$items].filter((el) => {
        const name = el.querySelector(".inventory_item_name")?.innerText?.toLowerCase() || "";
        const desc = el.querySelector(".inventory_item_desc")?.innerText?.toLowerCase() || "";
        return name.includes(keyword) || desc.includes(keyword);
      });

      // Assert at least one match exists
      expect(matches.length, `items matching "${keyword}"`).to.be.greaterThan(0);
    });

    // Assert that at least one visible item contains the keyword in the name/desc
    cy.get(".inventory_item_name, .inventory_item_desc")
      .invoke("text")
      .then((txt) => {
        expect(txt.toLowerCase()).to.include(keyword);
      });
  });
});
