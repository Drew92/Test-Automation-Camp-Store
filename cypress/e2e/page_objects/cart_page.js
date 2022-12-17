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
    

}
module.exports = new CartPage();