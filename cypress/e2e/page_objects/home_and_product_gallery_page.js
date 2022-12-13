import Page from "./page";

class HomePage extends Page {

    get btnSignOut(){
        return (`#top-sign-out`);
    }    

    get imgQFittedHat(){
        return (`.chakra-image.css-2i84d9[src='/images/quality-hat-model.jpg']`);
    } 

    get btnHome(){
        return (`#top-home`);
    }  

    get iFrame(){
        return (`iframe[title='Automate Your Quality Assurance Testing']`);
    }
    
    get iFrameVideo(){
        return (`.video-stream`);
    } 

    get btnAbout(){
        return (` #top-about`);
    } 

    get linkAbout(){
        return (`a[href='https://qualityworkscg.com/automation-bootcamp/']`);
    }
   

}
module.exports = new HomePage();