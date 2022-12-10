import Page from "./page";

class CartPage extends Page {

    //Home and Product Gallery Page getters


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


}
module.exports = new CartPage();