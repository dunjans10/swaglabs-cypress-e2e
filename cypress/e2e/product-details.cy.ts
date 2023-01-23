import { LoginPage } from "../pages/Login";
import { ProductsPage } from "../pages/Products";
import { Data } from "./model";

describe('Product details page', () => {
  let data:Data;
  before(() => {
    LoginPage.loginUser()
    cy.fixture("data").then(dataJson => {
      data = dataJson;
    });
  });

  it('showing information about product (Sauce Labs Backpack)', () => {
    cy.url().should("contain", data.productsPage)
    cy.contains('.inventory_item_name', data.product_1).click()
    cy.url().should('contain', data.product_1_url)
    ProductsPage.productDetailsNameElement.should('have.text', data.product_1)
    ProductsPage.addToCartElement.click()
    ProductsPage.shoppingCartBadgeElement.should('contain', 1)
    ProductsPage.removeFromCartElement.click()
    ProductsPage.shoppingCartLinkElement.should('not.have.value')
    ProductsPage.backToProductsElement.click()
    cy.url().should('contain', data.productsPage)
  })
})
