/// <reference types="cypress" />

import AuthPage from '../page_objects/auth_pages'
import HomePage from '../page_objects/home_and_product_gallery_page'

describe("Home and Product Gallery page Tests",()=>{
    
    beforeEach(() => {
        AuthPage.open();
        cy.get(AuthPage.btnSignInOrRegister).click();
        AuthPage.login("drewtest@ahmail.com","bc123Quality");
        cy.wait(3000);
      });

    it("Should be able to logout",()=>{
      
        //assertions

        //check that user is on home page and logout option is available
        cy.url().should('eq', Cypress.config().baseUrl + 'products');
        cy.get(HomePage.btnSignOut).should('be.visible').click();
        cy.wait(2000);

        //check that user is successfully logged out
        cy.url().should('eq', Cypress.config().baseUrl);
        cy.get(AuthPage.btnSignInOrRegister).should('be.visible');

    });

    it("Should be redirected to home and product gallery page when “Home” button is clicked",()=>{
       
        //assertions

        //navigate to Fitted Hat product page
        cy.get(HomePage.imgQFittedHat).scrollIntoView().should('be.visible').click();
        cy.url().should('not.equal', Cypress.config().baseUrl);
        cy.wait(3000);

        //navigate to Home and Product gallery page
        cy.get(HomePage.btnHome).should('be.visible').click();
        cy.url().should('eq', Cypress.config().baseUrl+ 'products');

    });

    it("Should open About page when about button is clicked",()=>{

        cy.get(HomePage.linkAbout)
        .invoke('removeAttr', 'target') //removes the target attribute from the link which forces the About page to open in a new tab 
        .click();
        cy.url().should('include', 'https://qualityworkscg.com/automation-bootcamp/');


    });
    

});