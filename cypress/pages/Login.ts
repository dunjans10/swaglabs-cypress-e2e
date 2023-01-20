class Login {
  private username:string="input#user-name";
  private password:string="input#password";
  private login:string="input#login-button";
  private invalidLoginMessage:string=".error-message-container";
  private closeButton:string = 'div>[role="img"]';

  get usernameElement():Cypress.Chainable<JQuery<HTMLElement>>{
    return cy.get(this.username)
  }
  get passwordElement():Cypress.Chainable<JQuery<HTMLElement>>{
    return cy.get(this.password)
  }
  get loginElement():Cypress.Chainable<JQuery<HTMLElement>>{
    return cy.get(this.login)
  }
  get invalidLoginMessageElement():Cypress.Chainable<JQuery<HTMLElement>>{
    return cy.get(this.invalidLoginMessage)
  }
  get closeButtonElement():Cypress.Chainable<JQuery<HTMLElement>>{
    return cy.get(this.closeButton)
  }

  submitLogin(username:string, password:string):void {
    cy.get(this.username).type(username)
    cy.get(this.password).type(password)
    cy.get(this.login).click()
  }

  visit():void{
    cy.visit(`${Cypress.env("swaglabs")}`)
  }
}

export const LoginPage = new Login();