class Logout {

  private menuButton:string = "#react-burger-menu-btn";
  private logout:string="#logout_sidebar_link";

  get menuBtnElement():Cypress.Chainable<JQuery<HTMLElement>>{
    return cy.get(this.menuButton)
  }
  get logoutElement():Cypress.Chainable<JQuery<HTMLElement>>{
    return cy.get(this.logout)
  }
}

export const LogoutPage = new Logout();