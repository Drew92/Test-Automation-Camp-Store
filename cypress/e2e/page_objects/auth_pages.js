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

    login(emailEntered,passwordEntered){
       this.open();
       cy.get(this.btnSignInOrRegister).click();

        const sentArgs={email:emailEntered,password:passwordEntered}

       cy.origin(
        "https://dev-mlluudmotpwoldtv.us.auth0.com",
        { args: sentArgs },
        ({email,password}) => {
            // cy.get(this.inputEmail).type(email);
            // cy.get(this.inputPassord).type(password,{log:false});

            cy.get(`[name='email']`).type(email);
            cy.get(`[name='password']`).type(password, { log: false }); 
            cy.get(`button[name='submit']`).click();
        }
       ); 
    }
}
module.exports = new AuthPage();