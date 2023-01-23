class Links {

  private twiter:string = ".social_twitter a";
  private facebook:string = ".social_facebook a";
  private linkedin:string = ".social_linkedin a";

  get twiterElement():Cypress.Chainable<JQuery<HTMLElement>>{
    return cy.get(this.twiter)
  }
  get facebookElement():Cypress.Chainable<JQuery<HTMLElement>>{
    return cy.get(this.facebook)
  }
  get linkedinElement():Cypress.Chainable<JQuery<HTMLElement>>{
    return cy.get(this.linkedin)
  }
}

export const LinkPage = new Links();