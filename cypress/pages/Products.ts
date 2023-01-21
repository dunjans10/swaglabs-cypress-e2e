class Products {

  private productItem:string = '.inventory_item';
  private shoppingCartBadge:string = '.shopping_cart_badge';
  private shoppingCartLink:string ='.shopping_cart_link';

  get shoppingCartBadgeElement():Cypress.Chainable<JQuery<HTMLElement>>{
    return cy.get(this.shoppingCartBadge)
  }

  get shoppingCartLinkElement():Cypress.Chainable<JQuery<HTMLElement>>{
    return cy.get(this.shoppingCartLink)
  }
  
  addProductToCart(productName) {
    cy.contains(this.productItem, productName).contains('button','Add to cart').click()
  }

  removeProductFromCart(productName) {
    cy.contains(this.productItem, productName).contains('button','Remove').click()
  }
}

export const ProductsPage = new Products();