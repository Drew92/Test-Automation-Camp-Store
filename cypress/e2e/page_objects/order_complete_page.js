import Page from "./page";

class OrderCompletePage extends Page {

    //Page getters


    get divCheckMarkIcon(){
        return (`.snipcart__box--badge`);
    }

    get spanItemInCart(){
        return (`.snipcart__font--regular`);
    }

    get divCreditCard(){
        return (`.snipcart-order__card`);
    }

    get divItemQty(){
        return (`.snipcart-cart-summary-expanded-item__quantity`);
    }
    

   

    //Page object methods
    

}
module.exports = new OrderCompletePage();