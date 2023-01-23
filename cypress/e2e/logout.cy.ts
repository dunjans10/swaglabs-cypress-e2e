import { LoginPage } from "../pages/Login";
import { LogoutPage } from "../pages/Logout";
import { Data } from "./model";

describe('Logout functionality', () => {
  let data:Data;
  before(() => {
    LoginPage.loginUser()
    cy.fixture("data").then(dataJson => {
      data = dataJson;
    }); 
  });

  it('Logout user from application', () => {
    cy.url().should("contain", data.productsPage)
    LogoutPage.menuBtnElement.click()
    LogoutPage.logoutElement.click()
    cy.url().should('contain', `${Cypress.config().baseUrl}`)
  });
});

describe('Slider bar', () => {
  let data:Data;
  before(() => {
    LoginPage.loginUser()
    cy.fixture("data").then(dataJson => {
      data = dataJson;
    });
  });

  it('open/close slide bar', () => {
    cy.url().should("contain", data.productsPage)
    LogoutPage.menuBtnElement.click()
    cy.contains('button', 'Close Menu').click()
  });
});
