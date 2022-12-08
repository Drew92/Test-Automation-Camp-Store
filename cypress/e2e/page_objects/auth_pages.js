import Page from "./page";

class AuthPage extends Page {

    get btnSignInOrRegister(){
        return (`#signInOrRegister`);
    }    

    get tabLogIn(){
        return (`//a[text()='Log In']`);
    }

    get tabSignUp(){
        return (`//a[text()='Sign Up']`);
    }

    get inputEmail(){
        return (`[name='email']`);
    }

    get inputPassord(){
        return (`[name='password']`);
    }

    get btnLogin_SignUp(){
        return (`button[name='submit']`);
    }

    login(email,password){
       this.open();
       cy.get(this.btnSignInOrRegister).click();

       cy.origin(
        "https://dev-mlluudmotpwoldtv.us.auth0.com",
        { args: {} },
        ({}) => {
            cy.get(this.inputEmail).type(email);
            cy.get(this.inputPassord).type(password,{log:false});
            cy.get(this.btnLogin_SignUp).click();
        }
       ); 
    }
}
module.exports = new AuthPage();