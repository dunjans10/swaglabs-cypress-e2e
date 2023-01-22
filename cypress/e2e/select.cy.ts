import { LoginPage } from "../pages/Login";
import { SelectPage } from "../pages/Select";

describe('Select products', () => {
  beforeEach(() => {
    LoginPage.visit();
    LoginPage.submitLogin("standard_user", "secret_sauce")
  });


  it('validate the dropdown option value - select by name (A to Z)', () => {
    SelectPage.select('az', 'Sauce Labs Backpack')
  });

  it('validate the dropdown option value - select by name (Z to A)', () => {
    SelectPage.select('za', 'Test.allTheThings() T-Shirt (Red)')  
  });

  it('validate the dropdown option value - select by Price (low to high)', () => {
    SelectPage.select('lohi', 'Sauce Labs Onesie')    
  });

  it('validate the dropdown option value - select by Price (high to low)', () => {
    SelectPage.select('hilo', 'Sauce Labs Fleece Jacket') 
  });
});
