import Page from "./page";

class ContactPage extends Page {

    get inputFirstName(){
        return (`#firstName`);
    }  

    get inputLastName(){
        return (`#lastName`);
    }  

    get inputEmail(){
        return (`#email`);
    }  

    get inputSubject(){
        return (`#subject`);
    }  

    get textareaMessage(){
        return (`#message`);
    }  
    
    get btnSendMessage(){
        return (`.css-vs0e4t`);
    }  

    get divSucessfullySentMessage(){
        return (`#toast-1-title`);
    } 

    get divErrorMessage(){
        return (`.chakra-form__error-message`);
    }

    get divAlertWindow_MessageSent(){
        return (`.chakra-alert`);
    }

    //Page object methods 

    createMessage(fname,lname,email,subject,message){
        cy.get(this.inputFirstName).type(fname);
        cy.get(this.inputLastName).type(lname);
        cy.get(this.inputEmail).type(email);
        cy.get(this.inputSubject).type(subject);
        cy.get(this.textareaMessage).type(message);
        cy.get(this.btnSendMessage).click();
    }

     
    

}
module.exports = new ContactPage();