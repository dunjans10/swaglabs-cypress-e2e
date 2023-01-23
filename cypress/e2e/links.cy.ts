import { LinkPage } from "../pages/Links";
import { LoginPage } from "../pages/Login";
import { Data } from "./model";

describe('Social pages', () => {
  let data:Data;
  beforeEach(() => {
    LoginPage.loginUser()
    cy.fixture("data").then(dataJson => {
      data = dataJson;
    });
  });

  it("validate twiter link", () => {
    LinkPage.twiterElement.should("have.attr", "href", data.twiterLink)
    LinkPage.twiterElement.should("have.attr", "target", "_blank")
  });

  it("validate facebook link", () => {
    LinkPage.facebookElement.should("have.attr", "href", data.facebookLink)
    LinkPage.facebookElement.should("have.attr", "target", "_blank")
  });

  it("validate linkedin link", () => {
    LinkPage.linkedinElement.should("have.attr", "href", data.linkedinLink)
    LinkPage.linkedinElement.should("have.attr", "target", "_blank")
  });
});
