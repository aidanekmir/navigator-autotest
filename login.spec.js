const LoginPage = require('./../pageobjects/Login.po');
const params = require('../../test_params.json');

describe('Login test suit', () => {

    it('should login as admin', ()=> {
        // browser.url(browser.options.baseUrl);
        LoginPage.open();
        LoginPage.doLogin(params.userCreds.login, params.userCreds.password);

    });
});       
        // browser.pause(5000);
        
        // LoginPage.password.setValue("Admin@Navi");
        // LoginButton.loginButton.click();


        // let passwordField = $('input[type="password"]');
        // passwordField.setValue("Admin@Navi"); 

        // let loginButton = $('button[type="submit"]');
        // loginButton.click();

    
 