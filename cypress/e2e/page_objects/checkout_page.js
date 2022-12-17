import Page from "./page";

class ChectoutPage extends Page {

    //Page getters


    get inputFullName(){
        return (`[name='name']`);
    }

    get inputEmail(){
        return (`[name='email']`);
    }

    get inputStreetAddress(){
        return (`[name='address1']`);
    }
    
    get inputApt_Suite(){
        return (`[name='address2']`);
    }

    get inputCity(){
        return (`[name='city']`);
    }

    get inputCountry(){
        return (`[name="country-target" ]`);
    }

    get inputProvince_State(){
        return (`[name="province-target" ]`);
    }

    get inputPostal_ZipCode(){
        return (`[name='postalCode']`);
    }

    get btnContinueToPay_PlaceOrder(){
        return (`button[type='submit']`);
    }

    get iframeCardInfo(){
        return (`.snipcart-payment-card-form iframe`);
    }

    get inputCardNumber(){
        return (`#card-number`);
    }

    get inputExpDate(){
        return (`#expiry-date`);
    }

    get inputCVV(){
        return (`#cvv`);
    }

    get divErrorMessage(){
        return (`.snipcart-field-error`);
    }

    get svgDropDownArrow(){
        return (`.snipcart__icon--medium`);
    }

    get btnEditCart(){
        return (`div[class='snipcart-cart-summary__actions snipcart__box--header'] button[type='button']`);
    }

    //Page object methods

    enterBillingInfo(fullName,email,address1,address2,city,country,provOrState,zipCode){

        cy.get(this.inputFullName).type(fullName);
        cy.get(this.inputEmail).type(email);
        cy.get(this.inputStreetAddress).type(address1);
        cy.get(this.inputApt_Suite).type(address2);
        cy.get(this.inputCity).type(city);
        cy.get(this.inputCountry).type(country,{force: true});
        cy.get(this.inputProvince_State).type(provOrState,{force: true});
        cy.get(this.inputPostal_ZipCode).type(zipCode);
        cy.get(this.btnContinueToPay_PlaceOrder).should('be.visible').click();
    
    }

    enterCardInfo(cardNumber,expDate,cvv){
        cy.iframe(this.iframeCardInfo).find(this.inputCardNumber).type(cardNumber);
        cy.iframe(this.iframeCardInfo).find(this.inputExpDate).type(expDate);
        cy.iframe(this.iframeCardInfo).find(this.inputCVV).type(cvv);
        cy.get(this.btnContinueToPay_PlaceOrder).should('be.visible').click();
    }
    

}
module.exports = new ChectoutPage();