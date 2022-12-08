/// <reference types="cypress" />

import AuthPage from '../page_objects/auth_pages'

describe("Authentication Tests",()=>{
    
    it("Login",()=>{
        AuthPage.login("drewtest@ahmail.com","bc123Quality");
    });
    

});