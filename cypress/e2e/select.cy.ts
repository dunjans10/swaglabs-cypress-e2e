import { LoginPage } from "../pages/Login";
import { SelectPage } from "../pages/Select";
import { Data } from "./model";

describe('Select products', () => {
  let data:Data;
  beforeEach(() => {
    LoginPage.loginUser()
    cy.fixture("data").then(dataJson => {
      data = dataJson;
    });
  });

  it('validate the dropdown option value - select by name (A to Z)', () => {
    SelectPage.select('az', data.product_1)
  });

  it('validate the dropdown option value - select by name (Z to A)', () => {
    SelectPage.select('za', data.product_6)  
  });

  it('validate the dropdown option value - select by Price (low to high)', () => {
    SelectPage.select('lohi', data.product_5)    
  });

  it('validate the dropdown option value - select by Price (high to low)', () => {
    SelectPage.select('hilo', data.product_4) 
  });
});
