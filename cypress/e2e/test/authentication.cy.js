/// <reference types="cypress" />

import AuthPage from '../page_objects/auth_pages'
import HomePage from '../page_objects/home_and_product_gallery_page'
import { faker } from '@faker-js/faker';

describe("Authentication Tests",()=>{
    
    beforeEach(() => {
        AuthPage.open();
        cy.get(AuthPage.btnSignInOrRegister).click();
      });

    it("Sign in with existing account",()=>{
        AuthPage.login("drewtest@ahmail.com","bc123Quality");
        cy.get(HomePage.btnSignOut).should('exist');

    });

    it("Register new account",()=>{
        AuthPage.register(faker.internet.email(),faker.internet.password(25));
        cy.get(HomePage.btnSignOut).should('exist');

    });

    it("Attempt to register account with password that doesn’t meet the required length",()=>{

        const sentArgs={emailValue:faker.internet.email(), passwordValue:faker.internet.password(7),
                        emailLoactor:AuthPage.inputEmail, passwordLocator:AuthPage.inputPassord,
                        loginBtnLocator:AuthPage.btnLoginOrSignUp, signUpTabLocator:AuthPage.tabLoginOrSignUp,
                        passwordErrorLocator:AuthPage.divPasswordErrorMessage}

        //const Args=AuthPage.divPasswordErrorMessage;
        cy.origin(
            "https://dev-mlluudmotpwoldtv.us.auth0.com",
            { args: sentArgs},
            ({emailValue,passwordValue,emailLoactor,passwordLocator,loginBtnLocator,signUpTabLocator,passwordErrorLocator}) => {

                cy.get(signUpTabLocator).click();

                cy.get(emailLoactor).type(emailValue);
                cy.get(passwordLocator).type(passwordValue, { log: false }); 
                cy.get(loginBtnLocator).click();

                cy.get(passwordErrorLocator).should('exist');
                cy.get(passwordErrorLocator).should('contain.text','Password is invalid');
            }
       ); 
    });
    

});