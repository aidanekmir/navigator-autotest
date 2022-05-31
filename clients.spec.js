const LoginPage = require('./pageobjects/Login.po');
const ClientPage  = require('./pageobjects/Client.po');


describe('Client page', function(){

    beforeEach(function(){
        LoginPage.open();
        LoginPage.doLogin("Admin", "Admin@Navi")
    })

    afterEach(function(){
        browser.reloadSession();
    })

    //      browser.url(browser.options.baseUrl);
    //      let loginField = $('input[type="text"]');
    //      loginField.setValue("Admin");

    //      let passwordField = $('input[type="password"]');
    //      passwordField.setValue("Admin@Navi"); 

    //      let loginButton = $('button[type="submit"]');
    //      loginButton.click();

    //      browser.pause(5000);

    // })


    it('should add client', function(){
       ClientPage.clickOnAddClientButton();
       browser.pause(3000);
       
       let surNameField = $('input[formcontrolname="userSurname"]');
       surNameField.setValue("Miratova");
       browser.pause(2000);

       let userNameField = $('input[formcontrolname="userName"]');
       userNameField.setValue("Aidai");
       browser.pause(2000);

       let middleNameField = $('input[formcontrolname="userMiddleName"]');
       middleNameField.setValue("Mirbekovna");
       browser.pause(2000);

       let sexChoice = $ ('div.add-user-modal mat-radio-group[formcontrolname="sex"] mat-radio-button:nth-child(2)');
       sexChoice.click();
       browser.pause(2000);

       let emailField = $('input[formcontrolname="email"]');
       emailField.setValue("aida21.kg@mail.ru");
       browser.pause(2000);
      
       let phoneField = $('input[formcontrolname="phone"]');
       phoneField.setValue("996709548711");
       browser.pause(2000);

       let professionField = $('mat-select[formcontrolname="profession"]');
       professionField.click();
       browser.pause(2000);

       let professionFieldOption = $('mat-option[id="mat-option-2"]');
       professionFieldOption.click();
       browser.pause(2000);

       let birthdayField = $('input[formcontrolname="birthday"]');
       birthdayField.setValue("4/26/2000");
       browser.pause(2000);

       let saveField = $('button[name="save"]');
       saveField.click();
       browser.pause(2000);

       let searchClient = $('input[name="search"]');
       searchClient.setValue("Aidai Miratova");
       browser.pause(2000);

       let editField = $('tr[class="crm-navigator-table__row ng-star-inserted"]');
       editField.click();
       browser.pause(2000);

       let surName2Field = $('input[placeholder="Фамилия"]');
       surName2Field.setValue("Максатова");
       browser.pause(2000);

       let userName2Field = $('input[placeholder="Имя"]');
       userName2Field.setValue("Айдан");
       browser.pause(2000);

       let middleName2Field = $('input[placeholder="Отчество"]');
       middleName2Field.setValue("Максатовна");
       browser.pause(2000);

       let birthday2Field = $('input[placeholder="Дата рождения"]');
       birthday2Field.setValue("10/10/2000");
       browser.pause(2000);

    //    let phone2Field = $('span[class="editIcon"]');
    //    phone2Field.click();
    //    phone2Field.setValue("+996 (700) 10-10-10");
    //    browser.pause(2000);

       browser.saveScreenshot('C:\\Users\\Neolabs\\js\\01\\file.jpg');
       
    })
})

 
    // it ('should search Client', function(){
    //     let searchClient = $('input[name="search"]');
    //     searchClient.click();
    //     searchClient.setValue("Black Regulus");
    //     searchClient.click();
    //     browser.pause(2000);
    // })

    // it ('should search Client', function(){
    //     let searchClient = $('input[name="search"]');
    //     searchClient.click();
    //     searchClient.setValue("Black Regulus");
    //     searchClient.click();
    //     browser.pause(2000);
    // })


    // it('should select Age', function(){
    // let selectAge = $//div[@class="options-select age"];
    // browser.pause(2000);
    // })
    // })

    // it ('should select Age', function(){
    // let selectAge = $//div[@class="options-select age"];
    // browser.pause(2000);
    // })
    // })

    //    it('should open first client', function(){
    //     firstClientRow.clickOnFirstRow();
    //     browser.pause(5000);

    // })



// it('should add client', function(){
//         let addClientButton = $('button.clients-add-user-dialog');
//         addClientButton.click();
//         browser.pause(5000);

//     })

// it('should open first client', function(){
//         let firstClientRow = $('table.crm-navigator-table tbody tr td span');
//         firstClientRow.click();
//         browser.pause(5000);
