/// <reference types="cypress" />

import AuthPage from '../page_objects/auth_pages'
import HomePage from '../page_objects/home_and_product_gallery_page'
import ContactPage from '../page_objects/contact_page'
import { faker } from '@faker-js/faker';

describe("Contact Page Tests",()=>{
    
    beforeEach(() => {
        AuthPage.open();
        cy.get(AuthPage.btnSignInOrRegister).click();
        AuthPage.login("drewtest@ahmail.com","bc123Quality");
        cy.wait(4000)
        cy.get(HomePage.btnContact).click();

      });

    it("Should be able to send a message successfully",()=>{
       
        ContactPage.createMessage(faker.name.firstName(),faker.name.lastName(),faker.internet.email(),faker.lorem.words(),faker.lorem.sentence());
        cy.wait(1000);

        //check for success alert message being displayed after sending message"
        cy.get(ContactPage.divSucessfullySentMessage).should('be.visible').should('contain.text','Sent!');   
    
    });

    it("Should attempt to send message with incorrect email format",()=>{

        ContactPage.createMessage(faker.name.firstName(),faker.name.lastName(),'badAdress@mail',faker.lorem.words(),faker.lorem.sentence());
        cy.wait(1000);

        //check for error message being displayed
        cy.get(ContactPage.divErrorMessage).should('be.visible').should('contain.text','Email is invalid');  
    });

    it(`“Message Sent!” alert should disappear 10 seconds after a message was sent successfully`,()=>{

        ContactPage.createMessage(faker.name.firstName(),faker.name.lastName(),faker.internet.email(),faker.lorem.words(),faker.lorem.sentence());
        cy.wait(1000);

        //assertions
        //check for success alert after sending message"
        cy.get(ContactPage.divSucessfullySentMessage).should('be.visible').should('contain.text','Sent!');  
        cy.get(ContactPage.divAlertWindow_MessageSent).should('be.visible');  
        
              
        //check that successful alert window disappares after 10 seconds"
        cy.wait(10000);
        cy.get(ContactPage.divAlertWindow_MessageSent).should('not.exist'); 
    });

});