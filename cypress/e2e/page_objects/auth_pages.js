import Page from "./page";

class AuthPage extends Page {

    //AuthPage getters
    get btnSignInOrRegister(){
        return (`#signInOrRegister`);
    }    

    get tabLogIn(){
        return (`//a[text()='Log In']`);
    }

    get tabLoginOrSignUp(){
        return (`li>a[href='#']`);
    }

    get inputEmail(){
        return (`[name='email']`);
    }

    get inputPassord(){
        return (`[name='password']`);
    }

    get btnLoginOrSignUp(){
        return (`button[name='submit']`);
    }

    get divLoginErrorMessage(){
        return (`.auth0-lock-error-invalid-hint`);
    }

    get spanInvalidLoginCredentials(){
        return (`.fadeInUp span`);
    }

    //Page object methods
    login(emailEntered,passwordEntered){

        //Set argument for all css locators and input values to be passed to orign
        const sentArgs={emailValue:emailEntered, passwordValue:passwordEntered,
                        emailLoactor:this.inputEmail, passwordLocator:this.inputPassord,
                        loginBtnLocator:this.btnLoginOrSignUp}

        cy.origin(
            "https://dev-mlluudmotpwoldtv.us.auth0.com",
            { args: sentArgs },
            ({emailValue,passwordValue,emailLoactor,passwordLocator,loginBtnLocator}) => {
            
                cy.get(emailLoactor).type(emailValue);
                cy.get(passwordLocator).type(passwordValue, { log: false }); 
                cy.get(loginBtnLocator).click();
            }
       ); 
    }

    register(emailEntered,passwordEntered){

        //Set argument for all css locators and input values to be passed to orign
        const sentArgs={emailValue:emailEntered, passwordValue:passwordEntered,
            emailLoactor:this.inputEmail, passwordLocator:this.inputPassord,
            loginBtnLocator:this.btnLoginOrSignUp, signUpTabLocator:this.tabLoginOrSignUp}

        cy.origin(
            "https://dev-mlluudmotpwoldtv.us.auth0.com",
            { args: sentArgs },
            ({emailValue,passwordValue,emailLoactor,passwordLocator,loginBtnLocator,signUpTabLocator}) => {
            
                cy.get(signUpTabLocator).click();

                cy.get(emailLoactor).type(emailValue);
                cy.get(passwordLocator).type(passwordValue, { log: false }); 
                cy.get(loginBtnLocator).click();
            }
       ); 

    }
}
module.exports = new AuthPage();