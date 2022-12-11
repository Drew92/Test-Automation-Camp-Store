import Page from "./page";

class HomePage extends Page {

    //Home and Product Gallery Page getters

    get btnSignOut(){
        return (`#top-sign-out`);
    } 

    get btnAddToCart_QFittedHat(){
        return (`button[data-item-id="quality-hat-model"]`);
    } 

    get btnIncreaseQty_QFittedHat(){
        return (`#product-0-increase`);
    }
   
    //HomePage object methods

    addQFittedHat(increaseQtyBy2){
        cy.get(this.btnAddToCart_QFittedHat).scrollIntoView();
        cy.wait(3000);

        if(increaseQtyBy2){
            cy.get(this.btnIncreaseQty_QFittedHat).should('be.visible').click().click(); //increases item qty by 2
        }
        cy.get(this.btnAddToCart_QFittedHat).should('be.visible').click();
         
    }

}
module.exports = new HomePage();