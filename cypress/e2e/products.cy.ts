import { LoginPage } from "../pages/Login";
import { ProductsPage } from "../pages/Products";
import { Data } from "./model";

describe('SWAGLABS products', () => {
  let data:Data;
  before(() => {
    LoginPage.loginUser()
    cy.fixture("data").then(dataJson => {
      data = dataJson;
    });
  });

  it("Six products should be displayed", () => {
    cy.url().should("contain", data.productsPage)
    ProductsPage.productItemElement.should("have.length", 6)
  });
});

describe('Displayed number in shopping cart icon when user add product(s)', () => {
  let data:Data;
  beforeEach(() => {
    LoginPage.loginUser()
    cy.fixture("data").then(dataJson => {
      data = dataJson;
    });
  });
  
  it("Adding product(s) to cart", () => {
    cy.url().should("contain", data.productsPage)
    ProductsPage.addProductToCart(data.product_1)
    ProductsPage.shoppingCartBadgeElement.should("contain", 1)
    ProductsPage.addProductToCart(data.product_2)
    ProductsPage.shoppingCartBadgeElement.should("contain", 2)
    ProductsPage.addProductToCart(data.product_3)
    ProductsPage.shoppingCartBadgeElement.should("contain", 3)
    ProductsPage.addProductToCart(data.product_4)
    ProductsPage.shoppingCartBadgeElement.should("contain", 4)
    ProductsPage.addProductToCart(data.product_5)
    ProductsPage.shoppingCartBadgeElement.should("contain", 5)
    ProductsPage.addProductToCart(data.product_6)
    ProductsPage.shoppingCartBadgeElement.should("contain", 6)
  });

  it("Removing product(s) from cart", () => {
    cy.url().should("contain", data.productsPage)
    ProductsPage.addProductToCart(data.product_1)
    ProductsPage.shoppingCartBadgeElement.should("contain", 1)
    ProductsPage.addProductToCart(data.product_2)
    ProductsPage.shoppingCartBadgeElement.should("contain", 2)
    ProductsPage.addProductToCart(data.product_3)
    ProductsPage.shoppingCartBadgeElement.should("contain", 3)
    ProductsPage.addProductToCart(data.product_4)
    ProductsPage.shoppingCartBadgeElement.should("contain", 4)

    ProductsPage.removeProductFromCart(data.product_4)
    ProductsPage.shoppingCartBadgeElement.should("contain", 3)
    ProductsPage.removeProductFromCart(data.product_3)
    ProductsPage.shoppingCartBadgeElement.should("contain", 2)
    ProductsPage.removeProductFromCart(data.product_2)
    ProductsPage.shoppingCartBadgeElement.should("contain", 1)
    ProductsPage.removeProductFromCart(data.product_1)
    ProductsPage.shoppingCartLinkElement.should("not.have.class", "shopping_cart_badge")  
  });
});

