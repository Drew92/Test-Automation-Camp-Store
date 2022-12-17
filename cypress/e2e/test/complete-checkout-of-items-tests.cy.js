/// <reference types="cypress" />

import AuthPage from '../page_objects/auth_pages'
import HomePage from '../page_objects/home_and_product_gallery_page'
import CartPage from '../page_objects/cart_page'
import CheckoutPage from '../page_objects/checkout_page'
import OrderCompletePage from '../page_objects/order_complete_page'
import { faker } from '@faker-js/faker';

describe("Checkout Item(s) Tests",()=>{
    
    beforeEach(() => {
        AuthPage.open();
        cy.get(AuthPage.btnSignInOrRegister).click();
        AuthPage.login("drewtest@ahmail.com","bc123Quality");
        HomePage.addQFittedHatMoreThanOnce(true);
        cy.wait(2000);
        CartPage.proceedToCheckout();
      });

    it("Should complete checkout of single item (eg. Quality Fitted Hat)",()=>{
       
        CheckoutPage.enterBillingInfo(faker.name.fullName(),faker.internet.email(),faker.address.streetAddress(),faker.address.buildingNumber(),faker.address.cityName(),'United States{enter}',faker.address.state()+'{enter}',faker.address.zipCode('#####-####'));
        cy.wait(2000);
        CheckoutPage.enterCardInfo('4242 4242 4242 4242','12/05','123');
        cy.wait(5000);

        //assertions for completed order    
        cy.get(OrderCompletePage.divCheckMarkIcon).should('exist');  
        cy.get(OrderCompletePage.spanItemInCart).should('contain.text','Quality Fitted Hat');
        cy.get(OrderCompletePage.divItemQty).should('contain.text','Qty: 3');
        cy.get(OrderCompletePage.divCreditCard).should('contain.text',' ···· ···· ···· 4242 ');

    });

    
    it("Should prevent checkout of item with incomplete billing information (email not entered)",()=>{

        CheckoutPage.enterBillingInfo(faker.name.fullName(),`{backspace}`,faker.address.streetAddress(),faker.address.buildingNumber(),faker.address.cityName(),'United States{enter}',faker.address.state()+'{enter}',faker.address.zipCode('#####-####'));

        //assertions
        cy.get(CheckoutPage.divErrorMessage).should('exist').should('contain.text','This field is required');  

    });

    it("Should be able to edit cart during checkout (change item quantity)",()=>{
       
        CheckoutPage.enterBillingInfo(faker.name.fullName(),faker.internet.email(),faker.address.streetAddress(),faker.address.buildingNumber(),faker.address.cityName(),'United States{enter}',faker.address.state()+'{enter}',faker.address.zipCode('#####-####'));
        cy.wait(2000);
        cy.get(CheckoutPage.svgDropDownArrow).click(); 
        cy.wait(2000);
        cy.get(CartPage.spanItemQty).should('contain.text','x3'); //checks item's quantity prior to editig 
        cy.get(CheckoutPage.btnEditCart).click();
        cy.wait(2000);

        CartPage.increaseQtyAndCloseCart()

        //assertions
        cy.get(CartPage.spanItemQty).should('contain.text','x4'); //checks item's quantity after editing
        cy.wait(2000);
        cy.get(CheckoutPage.svgDropDownArrow).click();

        CheckoutPage.enterCardInfo('4242 4242 4242 4242','12/05','123');
        cy.wait(5000);

        //assertions for completed order      
        cy.get(OrderCompletePage.divCheckMarkIcon).should('exist');  
        cy.get(OrderCompletePage.spanItemInCart).should('contain.text','Quality Fitted Hat');
        cy.get(OrderCompletePage.divItemQty).should('contain.text','Qty: 4');
        cy.get(OrderCompletePage.divCreditCard).should('contain.text',' ···· ···· ···· 4242 ');



    });
    

});