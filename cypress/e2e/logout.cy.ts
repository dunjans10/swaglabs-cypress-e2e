import { LoginPage } from "../pages/Login";

describe('Logout functionality', () => {
  beforeEach(() => {
    LoginPage.visit();
    LoginPage.submitLogin("standard_user", "secret_sauce")
    cy.url().should("contain", "inventory.html")
  });

  it('Logout user from application', () => {
    cy.get('#react-burger-menu-btn').click()
    cy.get('#logout_sidebar_link').click()
    cy.url().should('contain','\https://www.saucedemo.com/')

  });
});


describe('Slider bar', () => {
  beforeEach(() => {
    LoginPage.visit();
    LoginPage.submitLogin("standard_user", "secret_sauce")
    cy.url().should("contain", "inventory.html")
  });

  it('open/close slide bar', () => {
    cy.get('#react-burger-menu-btn').click()
    cy.contains('button', 'Close Menu').click()

  });
});
