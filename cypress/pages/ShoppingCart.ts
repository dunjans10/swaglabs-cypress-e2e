import { LoginPage } from "./Login";

class ShoppingCart {

  private productItem:string = '.cart_item';
  private shoppingCartContainer:string = '.shopping_cart_container';
  private cartItem:string = '.cart_item';
  private firstName:string = '#first-name';
  private lastName:string = '#last-name';
  private postalCode:string = '#postal-code';
  private continueBtn:string = '#continue';
  private checkout:string = '#checkout';
  private continueShoppingBtn:string = '#continue-shopping';
  private errorMessage:string = '.error-message-container';
  private title:string = '.title';
  private finishOrder:string = '#finish';
  private cancelOrder:string = '#cancel'
  private headerMessage:string = '.complete-header';

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

  get checkoutElement():Cypress.Chainable<JQuery<HTMLElement>>{
    return cy.get(this.checkout)
  }

  get continueShoppingElement():Cypress.Chainable<JQuery<HTMLElement>>{
    return cy.get(this.continueShoppingBtn)
  }

  get errorMessageElement():Cypress.Chainable<JQuery<HTMLElement>>{
    return cy.get(this.errorMessage)
  }

  get titleElement():Cypress.Chainable<JQuery<HTMLElement>>{
    return cy.get(this.title)
  }

  get finishOrderElement():Cypress.Chainable<JQuery<HTMLElement>>{
    return cy.get(this.finishOrder)
  }

  get cancelOrderElement():Cypress.Chainable<JQuery<HTMLElement>>{
    return cy.get(this.cancelOrder)
  }

  get headerMessageElement():Cypress.Chainable<JQuery<HTMLElement>>{
    return cy.get(this.headerMessage)
  }

  removeProductFromCart(productName) {
    cy.contains(this.productItem, productName).contains('button','Remove').click()
  }

  visit(){
    LoginPage.loginUser()
    cy.url().should("contain", "inventory.html")
  }
}

export const ShoppingCartPage = new ShoppingCart();