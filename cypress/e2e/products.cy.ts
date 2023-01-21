import { LoginPage } from "../pages/Login";
import { ProductsPage } from "../pages/Products";

describe('SWAGLABS products', () => {
  before(() => {
    LoginPage.visit();
    LoginPage.submitLogin("standard_user", "secret_sauce")
    cy.url().should("contain", "inventory.html")
  });

  it("Six products should be displayed", () => {
    cy.get(".inventory_item").should("have.length", 6)
  });
});

describe('Displayed number in shopping cart icon when user add product(s)', () => {
  beforeEach(() => {
    LoginPage.visit();
    LoginPage.submitLogin("standard_user", "secret_sauce")
    cy.url().should("contain", "inventory.html")
  });
  
  it("Adding product(s) to cart", () => {
    ProductsPage.addProductToCart("Sauce Labs Backpack")
    ProductsPage.shoppingCartBadgeElement.should("contain", 1)
    ProductsPage.addProductToCart("Sauce Labs Bike Light")
    ProductsPage.shoppingCartBadgeElement.should("contain", 2)
    ProductsPage.addProductToCart("Sauce Labs Bolt T-Shirt")
    ProductsPage.shoppingCartBadgeElement.should("contain", 3)
    ProductsPage.addProductToCart("Sauce Labs Fleece Jacket")
    ProductsPage.shoppingCartBadgeElement.should("contain", 4)
    ProductsPage.addProductToCart("Sauce Labs Onesie")
    ProductsPage.shoppingCartBadgeElement.should("contain", 5)
    ProductsPage.addProductToCart("Test.allTheThings() T-Shirt (Red)")
    ProductsPage.shoppingCartBadgeElement.should("contain", 6)
  });

  it("Removing product(s) from cart", () => {
    ProductsPage.addProductToCart("Sauce Labs Backpack")
    ProductsPage.shoppingCartBadgeElement.should("contain", 1)
    ProductsPage.addProductToCart("Sauce Labs Bike Light")
    ProductsPage.shoppingCartBadgeElement.should("contain", 2)
    ProductsPage.addProductToCart("Sauce Labs Bolt T-Shirt")
    ProductsPage.shoppingCartBadgeElement.should("contain", 3)
    ProductsPage.addProductToCart("Sauce Labs Fleece Jacket")
    ProductsPage.shoppingCartBadgeElement.should("contain", 4)

    ProductsPage.removeProductFromCart("Sauce Labs Fleece Jacket")
    ProductsPage.shoppingCartBadgeElement.should("contain", 3)
    ProductsPage.removeProductFromCart("Sauce Labs Bolt T-Shirt")
    ProductsPage.shoppingCartBadgeElement.should("contain", 2)
    ProductsPage.removeProductFromCart("Sauce Labs Bike Light")
    ProductsPage.shoppingCartBadgeElement.should("contain", 1)
    ProductsPage.removeProductFromCart("Sauce Labs Backpack")
    ProductsPage.shoppingCartLinkElement.should("not.have.class", "shopping_cart_badge")
    
    
    
  
  })

})

