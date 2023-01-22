import { LoginPage } from "../pages/Login";

describe('Social pages', () => {
  beforeEach(() => {
    LoginPage.visit();
    LoginPage.submitLogin("standard_user", "secret_sauce")
    cy.url().should("contain", "inventory.html")
  });

  it("validate twiter link", () => {
    cy.get(".social_twitter a").should("have.attr", "href", "https://twitter.com/saucelabs")
    cy.get(".social_twitter a").should("have.attr", "target", "_blank")
  });

  it("validate facebook link", () => {
    cy.get(".social_facebook a").should("have.attr", "href", "https://www.facebook.com/saucelabs")
    cy.get(".social_facebook a").should("have.attr", "target", "_blank")
  });

  it("validate linkedin link", () => {
    cy.get(".social_linkedin a").should("have.attr", "href", "https://www.linkedin.com/company/sauce-labs/")
    cy.get(".social_linkedin a").should("have.attr", "target", "_blank")
  });
});
