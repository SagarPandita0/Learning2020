const { element } = require("protractor");

describe('When on Login Page', function() 
{
    beforeEach(async function() 
    {
     await browser.get('http://localhost:4200');
    });
  
    it('should detect Patient button on next page',async function() 
    {
     await element(by.id('userName')).sendKeys("User")
     await element(by.id('password')).sendKeys("");
  
     await element(by.id('login')).click();
      var el =  await element(by.id('Patient'));
      expect(await el.getText()).toEqual("Patient");
      
    });
})