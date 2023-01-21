
import { ProductsPage } from "../pages/Products";
import { ShoppingCartPage } from "../pages/ShoppingCart";

describe('Shopping cart', () => {
  beforeEach(() => {
    ShoppingCartPage.visit()
  });

  it("Adding two products to the cart and going to the user cart and remove one product from cart", () => {
    ProductsPage.addProductToCart("Sauce Labs Backpack")
    ProductsPage.addProductToCart("Sauce Labs Bike Light")
    ShoppingCartPage.shoppingCartContainerElement.click()
    cy.url().should("contain", "cart.html")
    cy.get(".title").should("have.text", "Your Cart")
    ShoppingCartPage.cartItemElement.should("have.length", 2)
    ShoppingCartPage.removeProductFromCart("Sauce Labs Bike Light")
    ShoppingCartPage.cartItemElement.should("have.length", 1)
  });

  it("Adding product to cart and going to the user cart and press button continue shopping", () => {
    ProductsPage.addProductToCart("Sauce Labs Backpack")
    ShoppingCartPage.shoppingCartContainerElement.click()
    cy.get("#continue-shopping").click()
    cy.url().should("contain", "inventory.html")
  });
})

describe('Adding product to cart and going to the user cart and press button checkout', () => {

  beforeEach(() => {
    ShoppingCartPage.visit()
    ProductsPage.addProductToCart("Sauce Labs Backpack")
    ShoppingCartPage.shoppingCartContainerElement.click()
    cy.get("#checkout").click()
    cy.url().should("contain", "checkout-step-one.html") 
  });

  it("with user information - finish order", () => {
   ShoppingCartPage.firstNameElement.type("Dunja")
   ShoppingCartPage.lastNameElement.type("Jovanovic")
   ShoppingCartPage.postalCodeElement.type("21000")
   ShoppingCartPage.continueElement.click()
   cy.url().should("contain", "checkout-step-two.html")
   cy.get("#finish").click()
   cy.url().should("contain", "checkout-complete.html")
   cy.get(".complete-header").should("have.text", "THANK YOU FOR YOUR ORDER")
  }),

  it("with user information - cancel order", () => {
    ShoppingCartPage.firstNameElement.type("Dunja")
    ShoppingCartPage.lastNameElement.type("Jovanovic")
    ShoppingCartPage.postalCodeElement.type("21000")
    ShoppingCartPage.continueElement.click()
    cy.url().should("contain", "checkout-step-two.html")
    cy.get("#cancel").click()
    cy.url().should("contain", "inventory.html")

   }),

  it("without enter user information / after error message enter user information", () => {
    ShoppingCartPage.continueElement.click()
    ShoppingCartPage.errorMessageElement.should("be.visible")
    ShoppingCartPage.errorMessageElement.should("have.text", "Error: First Name is required")
    ShoppingCartPage.errorMessageElement.should("have.css", "background-color", "rgb(226, 35, 26)")
    ShoppingCartPage.firstNameElement.type("Dunja")
    ShoppingCartPage.continueElement.click()
    ShoppingCartPage.errorMessageElement.should("have.text", "Error: Last Name is required")
    ShoppingCartPage.lastNameElement.type("Jovanovic")
    ShoppingCartPage.continueElement.click()
    ShoppingCartPage.errorMessageElement.should("have.text", "Error: Postal Code is required")
    ShoppingCartPage.postalCodeElement.type("21000")
    ShoppingCartPage.continueElement.click()
    cy.url().should("contain", "checkout-step-two.html")
  });
});

