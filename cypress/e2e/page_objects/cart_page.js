import Page from "./page";

class CartPage extends Page {

    // Page getters


    get ulCart(){
        return ('section.snipcart-cart__content');
    }

    get h2TitleOfItemInCart(){
        return (`.snipcart-item-line__title`);
    } 
   
    get li_ItemRecordInCart(){
        return (`.snipcart-item-line`);
    } 

    get li_ItemRecordInCartQty(){
        return (`.snipcart__font--secondary.snipcart__font--regular`);
    } 

    get spanContinueShopping(){
        return (`.snipcart-modal__close-title`);
    } 

    get btnRemoveItem(){
        return (`button[title='Remove item']`);
    } 
    
    get btnIncreaseItemQty(){
        return (`button[title='Increment quantity']`);
    } 

    get btnDecreaseItemQty(){
        return (`button[title='Decrement quantity']`);
    } 

    get sectionEmptyCart(){
        return (`.snipcart-empty-cart__title`);
    } 

    get btnCheckout(){
        return (`.snipcart-button-primary`);
    }

    get btnCloseCart(){
        return (`div[class='snipcart-cart__secondary-header'] button`);
    }

    get spanItemQty(){
        return (`.snipcart-cart-summary-item__quantity.snipcart__font--slim`);
    }

    //Page object methods

    proceedToCheckout(){
        cy.get(this.btnCheckout).should('be.visible').click();
    
    }

    increaseQtyAndCloseCart(){
        cy.get(this.btnIncreaseItemQty).should('be.visible').click();
        cy.get(this.btnCloseCart).should('be.visible').click();
    
    }
    

}
module.exports = new CartPage();