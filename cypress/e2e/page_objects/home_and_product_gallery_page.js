import Page from "./page";

class HomePage extends Page {

    get btnSignOut(){
        return (`#top-sign-out`);
    }  
    
    get imgQFittedHat(){
        return (`.chakra-image.css-2i84d9[src='/images/quality-hat-model.jpg']`);
    } 

}
module.exports = new HomePage();