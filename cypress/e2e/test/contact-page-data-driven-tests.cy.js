/// <reference types="cypress" />

import AuthPage from '../page_objects/auth_pages'
import HomePage from '../page_objects/home_and_product_gallery_page'
import ContactPage from '../page_objects/contact_page'
import messages from '../data/messages';


describe('Contect Page Data Driven Tests', () => {

    beforeEach(() => {
        AuthPage.open();
        cy.get(AuthPage.btnSignInOrRegister).click();
        AuthPage.login("drewtest@ahmail.com","bc123Quality");
        cy.wait(4000)
        cy.get(HomePage.btnContact).click();

      });

    for (const message of messages){


        it(message.testTitle, () => {
  
            ContactPage.createMessage(message.firstName,message.lastName,message.email,message.subject,message.messageText);
            cy.wait(1000);

            if(message.isValid){
                cy.get(ContactPage.divSucessfullySentMessage).should('be.visible').should('contain.text',message.response)
            }else{
                cy.get(ContactPage.divErrorMessage).should('be.visible').should('contain.text',message.response);
            }
        });
    }

  });
