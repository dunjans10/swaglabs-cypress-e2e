import { LoginPage } from "../pages/Login";

describe('Login UI', () => {
  beforeEach(() => {
    LoginPage.visit()
  });

  it('A both inputs (for incorrect username and incorrect password) should have close button', () =>{
    LoginPage.submitLogin(`${Cypress.env("wrongUsername")}`,`${Cypress.env("wrongPassword")}`)
    LoginPage.closeButtonElement.first().should("be.visible")
    LoginPage.closeButtonElement.last().should("be.visible")
  });

  it('Input for incorrect username should have close button - invalid scenario', () =>{
    LoginPage.submitLogin(`${Cypress.env("wrongUsername")}`,`${Cypress.env("validPassword")}`)
    LoginPage.closeButtonElement.first().should("be.visible")
    LoginPage.closeButtonElement.last().should("not.be.visible")
  });

  it('Input for incorrect password should have close button - invalid scenario', () =>{
    LoginPage.submitLogin(`${Cypress.env("validUsername")}`,`${Cypress.env("wrongPassword")}`)
    LoginPage.closeButtonElement.first().should("not.be.visible")
    LoginPage.closeButtonElement.last().should("be.visible")
  });

  it('Clicking on close button in input field username should remove the text from input - invalid scenario', () => {
    LoginPage.submitLogin(`${Cypress.env("wrongUsername")}`,`${Cypress.env("validPassword")}`)
    LoginPage.closeButtonElement.first().click()
    LoginPage.usernameElement.should("contain.value", " ")
  });

  it('Clicking on close button in input field password should remove the text from input - invalid scenario', () => {
    LoginPage.submitLogin(`${Cypress.env("validUsername")}`,`${Cypress.env("wrongPassword")}`)
    LoginPage.closeButtonElement.last().click()
    LoginPage.passwordElement.should("contain.value", " ")
  });
});
