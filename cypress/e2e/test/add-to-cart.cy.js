/// <reference types="cypress" />

import AuthPage from '../page_objects/auth_pages'
import HomePage from '../page_objects/home_and_product_gallery_page'
import CartPage from '../page_objects/cart_page'

describe("Add to Cart Tests",()=>{
    
    beforeEach(() => {
        AuthPage.open();
        cy.get(AuthPage.btnSignInOrRegister).click();
        AuthPage.login("drewtest@ahmail.com","bc123Quality");
      });

    it("Should add single item (Quality Fitted Hat) to cart from product gallery home page",()=>{
       
        HomePage.addQFittedHatMoreThanOnce(false);

        //assertions
        cy.wait(3000);
        cy.get(CartPage.h2TitleOfItemInCart).contains('Quality Fitted Hat').should('be.visible');

    });

    
    it("should add item to cart (Quality Fitted Hat) with a quantity greater than 1",()=>{
       

        HomePage.addQFittedHatMoreThanOnce(true);
   

        //assertions
        cy.get(CartPage.li_ItemRecordInCart).contains('Quality Fitted Hat').should('be.visible');
        cy.get(CartPage.li_ItemRecordInCart).find(CartPage.li_ItemRecordInCartQty).should('contain.text','3');

    });

    it("Should add item (Quality Fitted Hat) to cart twice, 1 the first time, 3 the second time",()=>{
       

        HomePage.addQFittedHatMoreThanOnce(false);
        cy.get(CartPage.spanContinueShopping).click();
        HomePage.addQFittedHatMoreThanOnce(true);

        //assertions
        cy.get(CartPage.li_ItemRecordInCart).contains('Quality Fitted Hat').should('be.visible');
        cy.get(CartPage.li_ItemRecordInCart).find(CartPage.li_ItemRecordInCartQty).should('contain.text','4');

    });
    

});