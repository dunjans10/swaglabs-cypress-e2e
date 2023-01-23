import { ProductsPage } from "../pages/Products";
import { ShoppingCartPage } from "../pages/ShoppingCart";
import { Data } from "./model";

describe('Shopping cart', () => {
  let data:Data;
  beforeEach(() => {
    ShoppingCartPage.visit()
    cy.fixture("data").then(dataJson => {
      data = dataJson;
    });
  });

  it("Adding two products to the cart and going to the user cart and remove one product from cart", () => {
    ProductsPage.addProductToCart(data.product_1)
    ProductsPage.addProductToCart(data.product_2)
    ShoppingCartPage.shoppingCartContainerElement.click()
    cy.url().should("contain", data.cartPage)
    ShoppingCartPage.titleElement.should("have.text", data.userCart)
    ShoppingCartPage.cartItemElement.should("have.length", 2)
    ShoppingCartPage.removeProductFromCart(data.product_2)
    ShoppingCartPage.cartItemElement.should("have.length", 1)
  });

  it("Adding product to cart and going to the user cart and press button continue shopping", () => {
    ProductsPage.addProductToCart(data.product_1)
    ShoppingCartPage.shoppingCartContainerElement.click()
    ShoppingCartPage.continueShoppingElement.click()
    cy.url().should("contain", data.productsPage)
  });
})

describe('Adding product to cart and going to the user cart and press button checkout', () => {
let data:Data;
  beforeEach(() => {
    ShoppingCartPage.visit()
    ProductsPage.addProductToCart("Sauce Labs Backpack")
    ShoppingCartPage.shoppingCartContainerElement.click()
    ShoppingCartPage.checkoutElement.click()
    cy.url().should("contain", "checkout-step-one.html")
    cy.fixture("data").then(dataJson => {
      data = dataJson;
    });
  });

  it("with user information - finish order", () => {
    
   ShoppingCartPage.firstNameElement.type(data.firstName)
   ShoppingCartPage.lastNameElement.type(data.lastName)
   ShoppingCartPage.postalCodeElement.type(data.postalCode)
   ShoppingCartPage.continueElement.click()
   cy.url().should("contain", data.userCart_url)
   ShoppingCartPage.finishOrderElement.click()
   cy.url().should("contain", data.userCart_complete_url)
   ShoppingCartPage.headerMessageElement.should("have.text", data.message_complete)
  }),

  it("with user information - cancel order", () => {
    
    ShoppingCartPage.firstNameElement.type(data.firstName)
    ShoppingCartPage.lastNameElement.type(data.lastName)
    ShoppingCartPage.postalCodeElement.type(data.postalCode)
    ShoppingCartPage.continueElement.click()
    cy.url().should("contain", data.userCart_url)
    ShoppingCartPage.cancelOrderElement.click()
    cy.url().should("contain", data.productsPage)
   }),

  it("without enter user information / after error message enter user information", () => {
    
    ShoppingCartPage.continueElement.click()
    ShoppingCartPage.errorMessageElement.should("be.visible")
    ShoppingCartPage.errorMessageElement.should("have.text", data.err_msg_1)
    ShoppingCartPage.errorMessageElement.should("have.css", "background-color", "rgb(226, 35, 26)")
    ShoppingCartPage.firstNameElement.type(data.firstName)
    ShoppingCartPage.continueElement.click()
    ShoppingCartPage.errorMessageElement.should("have.text", data.err_msg_2)
    ShoppingCartPage.lastNameElement.type(data.lastName)
    ShoppingCartPage.continueElement.click()
    ShoppingCartPage.errorMessageElement.should("have.text",data.err_msg_3)
    ShoppingCartPage.postalCodeElement.type(data.postalCode)
    ShoppingCartPage.continueElement.click()
    cy.url().should("contain", data.userCart_url)
  });
});

