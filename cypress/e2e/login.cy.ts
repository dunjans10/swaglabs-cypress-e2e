import { LoginPage } from "../pages/Login";

describe('Login functionality', () => {
  beforeEach(() => {
    LoginPage.visit()
  });

  it('successfull login scenario (correct username and password)', () => {
    LoginPage.submitLogin("standard_user", "secret_sauce")
    cy.url().should("contain", "inventory.html")
    cy.get(".app_logo").should("be.visible")
  });

  it('wrong login scenario (incorrect username and incorrect password)', () => {
    LoginPage.submitLogin("wrongUsername", "wrongPassword")
    cy.url().should("not.contain", "inventory.html")
    LoginPage.invalidLoginMessageElement.should("have.text", "Epic sadface: Username and password do not match any user in this service")
    LoginPage.invalidLoginMessageElement.should("have.css", "background-color", "rgb(226, 35, 26)")
  });

  it('wrong login scenario (incorrect username and correct password)', () => {
    LoginPage.submitLogin("wrongUsername", "secret_sauce")
    cy.url().should("not.contain", "inventory.html")
    LoginPage.invalidLoginMessageElement.should("have.text", "Epic sadface: Username and password do not match any user in this service")
    LoginPage.invalidLoginMessageElement.should("have.css", "background-color", "rgb(226, 35, 26)")
  });

  it('wrong login scenario (correct username and incorrect password)', () => {
    LoginPage.submitLogin("standard_user", "wrongPassword")
    cy.url().should("not.contain", "inventory.html")
    LoginPage.invalidLoginMessageElement.should("have.text", "Epic sadface: Username and password do not match any user in this service")
    LoginPage.invalidLoginMessageElement.should("have.css", "background-color", "rgb(226, 35, 26)")
  });

  it('wrong login scenario (locked out user)', () => {
    LoginPage.submitLogin("locked_out_user", "secret_sauce")
    cy.url().should("not.contain", "inventory.html")
    LoginPage.invalidLoginMessageElement.should("have.text", "Epic sadface: Sorry, this user has been locked out.")
    LoginPage.invalidLoginMessageElement.should("have.css", "background-color", "rgb(226, 35, 26)")
  });
});