/// <reference types="cypress" />

import AuthPage from '../page_objects/auth_pages'
import logins from '../data/login_data';


describe('Authentication Data Driven Tests', () => {

    beforeEach(() => {
        AuthPage.open();
        cy.get(AuthPage.btnSignInOrRegister).click();
        
      });

    for (const login of logins){


        it(login.testTitle, () => {

            //Set argument for all css locators and input values to be passed to orign
            const sentArgs={emailValue:login.email,
                         passwordValue:login.password,
                        emailLoactor:AuthPage.inputEmail,
                        passwordLocator:AuthPage.inputPassord,
                        loginBtnLocator:AuthPage.btnLoginOrSignUp,
                        loginErrorLocator:AuthPage.divLoginErrorMessage,
                        loginErrorBarLocator:AuthPage.spanInvalidLoginCredentials,
                        loginErrorMessage:login.message,
                        loginHasAccess:login.hasAccess,
                        loginUsesErrorMsgBarLocator:login.useErrorMsgBarLocator}

            cy.origin(
            "https://dev-mlluudmotpwoldtv.us.auth0.com",
            { args: sentArgs},
            ({emailValue,passwordValue,emailLoactor,passwordLocator,loginBtnLocator,loginErrorLocator,loginErrorBarLocator,loginErrorMessage,loginHasAccess,loginUsesErrorMsgBarLocator}) => {


                cy.get(emailLoactor).type(emailValue);
                cy.get(passwordLocator).type(passwordValue, { log: false }); 
                cy.get(loginBtnLocator).click();

                //assertions
                if(loginHasAccess){

                    cy.get(loginErrorLocator).should('not.exist');
                    cy.get(loginErrorBarLocator).should('not.exist');
                    cy.wait(5000);

                }else if(loginUsesErrorMsgBarLocator){                    
                    cy.get(loginErrorBarLocator).should('exist').should('contain.text',loginErrorMessage);
                }
                else{
                    cy.get(loginErrorLocator).should('exist').should('contain.text',loginErrorMessage);
                }
                
                
            }
            ); 




        });
    }

  });
