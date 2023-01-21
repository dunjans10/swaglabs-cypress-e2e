import { LoginPage } from "../pages/Login";

describe('Product details page', () => {
  before(() => {
    LoginPage.visit();
    LoginPage.submitLogin("standard_user", "secret_sauce")
    cy.url().should("contain", "inventory.html")
  });

  it('showing information about product (Sauce Labs Backpack)', () => {
    cy.contains('.inventory_item_name', 'Sauce Labs Backpack').click()
    cy.url().should('contain', 'inventory-item.html?id=4')
    cy.get('.inventory_details_name ').should('have.text', 'Sauce Labs Backpack')
    cy.get('#add-to-cart-sauce-labs-backpack').click()
    cy.get('.shopping_cart_badge').should('contain', 1)
    cy.get('#remove-sauce-labs-backpack').click()
    cy.get('.shopping_cart_link').should('not.have.value')
    cy.get('#back-to-products').click()
    cy.url().should('contain', 'inventory.html')
  })
})
