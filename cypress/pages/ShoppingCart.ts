import { LoginPage } from "./Login";

class ShoppingCart {

  private productItem:string = '.cart_item';
  private shoppingCartContainer:string = '.shopping_cart_container';
  private cartItem:string = '.cart_item';
  private firstName:string = '#first-name';
  private lastName:string = '#last-name';
  private postalCode:string = '#postal-code';
  private continueBtn:string = '#continue';
  private errorMessage:string = '.error-message-container';

  get shoppingCartContainerElement():Cypress.Chainable<JQuery<HTMLElement>>{
    return cy.get(this.shoppingCartContainer)
  }

  get cartItemElement():Cypress.Chainable<JQuery<HTMLElement>>{
    return cy.get(this.cartItem)
  }

  get firstNameElement():Cypress.Chainable<JQuery<HTMLElement>>{
    return cy.get(this.firstName)
  }

  get lastNameElement():Cypress.Chainable<JQuery<HTMLElement>>{
    return cy.get(this.lastName)
  }

  get postalCodeElement():Cypress.Chainable<JQuery<HTMLElement>>{
    return cy.get(this.postalCode)
  }

  get continueElement():Cypress.Chainable<JQuery<HTMLElement>>{
    return cy.get(this.continueBtn)
  }

  get errorMessageElement():Cypress.Chainable<JQuery<HTMLElement>>{
    return cy.get(this.errorMessage)
  }

  removeProductFromCart(productName) {
    cy.contains(this.productItem, productName).contains('button','Remove').click()
  }

  visit(){
    LoginPage.visit();
    LoginPage.submitLogin("standard_user", "secret_sauce")
    cy.url().should("contain", "inventory.html")
  }
}

export const ShoppingCartPage = new ShoppingCart();