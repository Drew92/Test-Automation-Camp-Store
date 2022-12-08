/// <reference types="cypress" />

import AuthPage from '../page_objects/auth_pages'
import HomePage from '../page_objects/home_and_product_gallery_page'

describe("Authentication Tests",()=>{
    
    it("Sign in with existing account",()=>{
        AuthPage.login("drewtest@ahmail.com","bc123Quality");
        cy.get(HomePage.btnSignOut).should('exist');

    });
    

});