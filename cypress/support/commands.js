// Login command
Cypress.Commands.add("login", (username, password) => {
  cy.get('[data-test="username"]').clear().type(username);
  cy.get('[data-test="password"]').clear().type(password);
  cy.get('[data-test="login-button"]').click();
});

// Logout command
Cypress.Commands.add("logout", () => {
  cy.get("#react-burger-menu-btn").click();
  cy.get("#logout_sidebar_link").click();
});

// Add product to cart
Cypress.Commands.add("addToCart", (productName) => {
  cy.contains(".inventory_item", productName)
    .find("button")
    .contains("Add to cart")
    .click();
});

// Verify cart count
Cypress.Commands.add("verifyCartCount", (count) => {
  cy.get(".shopping_cart_badge").should("contain", count);
});

//for mocking and API testing of CAPTCHA feature which doesnt exist in saucedemo
Cypress.Commands.add("loginWithToken", () => {
  const fakeToken = "fake-jwt-token-12345";

  cy.window().then((win) => {
    win.localStorage.setItem("auth_token", fakeToken);
  });
});

