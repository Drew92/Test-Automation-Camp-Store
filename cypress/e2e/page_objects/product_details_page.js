import Page from "./page";

class ProductDetailsPage extends Page {

    //Page object getters

    get linkBackToProducts(){
        return (`.chakra-heading.css-18j379d`);
    } 

    get btnNextArrow(){
        return (`button[class='control-arrow control-next']`);
    } 

    get btnPreviousArrow(){
        return (`button[class='control-arrow control-prev']`);
    }

    get p_ImageLabel_AfterClickingArrow(){
        return (`li[class='slide selected'] p[class='legend']`);
    }

    get p_ImageLabel_AfterPageLoad(){
        return (`li[class='slide selected previous'] p[class='legend']`);
    }
    
    get btnIncreaseQty(){
        return (`#product-increase`);
    }

    get btnDecreaseQty(){
        return (`#product-decrease`);
    }

    get inputQty(){
        return (`.chakra-numberinput__field`);
    }

    
}
module.exports = new ProductDetailsPage();