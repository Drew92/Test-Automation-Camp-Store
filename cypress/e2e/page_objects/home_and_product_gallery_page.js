import Page from "./page";

class HomePage extends Page {

    get btnSignOut(){
        return (`#top-sign-out`);
    }  
    
    get btnContact(){
        return (`#top-contact`);
    }  

}
module.exports = new HomePage();