/// <reference types="cypress" />

import AuthPage from '../page_objects/auth_pages'
import HomePage from '../page_objects/home_and_product_gallery_page'
import CartPage from '../page_objects/cart_page'

describe("Add to Cart Tests",()=>{
    
    beforeEach(() => {
        AuthPage.open();
        cy.get(AuthPage.btnSignInOrRegister).click();
        AuthPage.login("drewtest@ahmail.com","bc123Quality");
        HomePage.addQFittedHat(true);
        cy.wait(2000);
      });

    it("Should remove item (Quality Fitted Hat) from cart",()=>{
       
        //assertions        
        cy.get(CartPage.h2TitleOfItemInCart).contains('Quality Fitted Hat').should('be.visible');
        cy.get(CartPage.btnRemoveItem).should('be.visible').click();
        cy.get(CartPage.h2TitleOfItemInCart).should('not.exist');

    });

    
    it("Should increase and Decrease item (Quality Fitted Hat) quantity in cart",()=>{

        //assertions
        cy.get(CartPage.li_ItemRecordInCart).contains('Quality Fitted Hat').should('be.visible');
        cy.get(CartPage.btnIncreaseItemQty).should('be.visible').click();
        cy.get(CartPage.li_ItemRecordInCart).find(CartPage.li_ItemRecordInCartQty).should('contain.text','4');
        cy.wait(2000);
        cy.get(CartPage.btnDecreaseItemQty).should('be.visible').click();
        cy.get(CartPage.li_ItemRecordInCart).find(CartPage.li_ItemRecordInCartQty).should('contain.text','3');

    });

    it("Decrease item (Quality Fitted Hat) quantity to zero should remove it from the cart",()=>{
       
        //assertions
        cy.get(CartPage.btnDecreaseItemQty).should('be.visible').click();
        cy.wait(1000);
        cy.get(CartPage.btnDecreaseItemQty).should('be.visible').click();
        cy.wait(1000);
        cy.get(CartPage.btnDecreaseItemQty).should('be.visible').click();
        cy.get(CartPage.h2TitleOfItemInCart).should('not.exist');
        cy.get(CartPage.sectionEmptyCart).should('be.visible');


    });
    

});