class ClientPage{
    get createModalPageButton() {return $('button.clients-add-user-dialog')};
    get firstClientRow() {return $('//span[@class="crm-navigator-table__date"]')};

     clickOnAddClientButton(){
       this.createModalPageButton.click();
            }

    clickOnFirstRow(){
         this.firstClientRow.click();
        }
    }
        

        
module.exports = new ClientPage
