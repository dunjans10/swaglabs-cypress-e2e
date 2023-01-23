import { LoginPage } from "../pages/Login";
import { Data } from "./model";

describe('Login functionality', () => {
  let data:Data;
  beforeEach(() => {
    LoginPage.visit()
    cy.fixture("data").then(dataJson => {
      data = dataJson;
    });
  });

  it('successfull login scenario (correct username and password)', () => {
    LoginPage.submitLogin(`${Cypress.env("validUsername")}`,`${Cypress.env("validPassword")}`)
    cy.url().should("contain", data.productsPage)
    LoginPage.logoElement.should("be.visible")
  });

  it('wrong login scenario (incorrect username and incorrect password)', () => {
    LoginPage.submitLogin(`${Cypress.env("wrongUsername")}`,`${Cypress.env("wrongPassword")}`)
    cy.url().should("not.contain", data.productsPage)
    LoginPage.invalidLoginMessageElement.should("have.text", data.errorMessage)
    LoginPage.invalidLoginMessageElement.should("have.css", "background-color", "rgb(226, 35, 26)")
  });

  it('wrong login scenario (incorrect username and correct password)', () => {
    LoginPage.submitLogin(`${Cypress.env("wrongUsername")}`,`${Cypress.env("validPassword")}`)
    cy.url().should("not.contain", data.productsPage)
    LoginPage.invalidLoginMessageElement.should("have.text", data.errorMessage)
    LoginPage.invalidLoginMessageElement.should("have.css", "background-color", "rgb(226, 35, 26)")
  });

  it('wrong login scenario (correct username and incorrect password)', () => {
    LoginPage.submitLogin(`${Cypress.env("validUsername")}`,`${Cypress.env("wrongPassword")}`)
    cy.url().should("not.contain", data.productsPage)
    LoginPage.invalidLoginMessageElement.should("have.text", data.errorMessage)
    LoginPage.invalidLoginMessageElement.should("have.css", "background-color", "rgb(226, 35, 26)")
  });

  it('wrong login scenario (locked out user)', () => {
    LoginPage.submitLogin( `${Cypress.env("lockedOutUsername")}`,`${Cypress.env("validPassword")}`)
    cy.url().should("not.contain", data.productsPage)
    LoginPage.invalidLoginMessageElement.should("have.text", data.errorMessageLockedUser)
    LoginPage.invalidLoginMessageElement.should("have.css", "background-color", "rgb(226, 35, 26)")
  });
});