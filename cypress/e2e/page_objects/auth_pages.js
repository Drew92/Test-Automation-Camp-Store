import Page from "./page";

class AuthPage extends Page {

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

    get divPasswordErrorMessage(){
        return (`.auth0-lock-error-invalid-hint`);
    }

    login(emailEntered,passwordEntered){

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