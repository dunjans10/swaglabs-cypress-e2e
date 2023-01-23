class Products {

  private productItem:string = '.inventory_item';
  private shoppingCartBadge:string = '.shopping_cart_badge';
  private shoppingCartLink:string ='.shopping_cart_link';
  private productName:string = '.inventory_item_name';
  private productDetailsName:string = '.inventory_details_name';
  private addToCart:string = '#add-to-cart-sauce-labs-backpack';
  private removeFromCart:string = '#remove-sauce-labs-backpack';
  private backToProducts:string = '#back-to-products';

  get productItemElement():Cypress.Chainable<JQuery<HTMLElement>>{
    return cy.get(this.productItem)
  }

  get shoppingCartBadgeElement():Cypress.Chainable<JQuery<HTMLElement>>{
    return cy.get(this.shoppingCartBadge)
  }

  get shoppingCartLinkElement():Cypress.Chainable<JQuery<HTMLElement>>{
    return cy.get(this.shoppingCartLink)
  }

  get productNameElement():Cypress.Chainable<JQuery<HTMLElement>>{
    return cy.get(this.productName)
  }

  get productDetailsNameElement():Cypress.Chainable<JQuery<HTMLElement>>{
    return cy.get(this.productDetailsName)
  }

  get addToCartElement():Cypress.Chainable<JQuery<HTMLElement>>{
    return cy.get(this.addToCart)
  }

  get removeFromCartElement():Cypress.Chainable<JQuery<HTMLElement>>{
    return cy.get(this.removeFromCart)
  }

  get backToProductsElement():Cypress.Chainable<JQuery<HTMLElement>>{
    return cy.get(this.backToProducts)
  }
  
  addProductToCart(productName) {
    cy.contains(this.productItem, productName).contains('button','Add to cart').click()
  }

  removeProductFromCart(productName) {
    cy.contains(this.productItem, productName).contains('button','Remove').click()
  }
}

export const ProductsPage = new Products();