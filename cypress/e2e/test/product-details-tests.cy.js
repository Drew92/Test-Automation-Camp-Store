/// <reference types="cypress" />

import AuthPage from '../page_objects/auth_pages'
import HomePage from '../page_objects/home_and_product_gallery_page'
import ProductDetailsPage from '../page_objects/product_details_page'

describe("Home and Product Gallery page Tests",()=>{
    
    beforeEach(() => {
        AuthPage.open();
        cy.get(AuthPage.btnSignInOrRegister).click();
        AuthPage.login("drewtest@ahmail.com","bc123Quality");
        cy.wait(3000);
        cy.get(HomePage.imgQFittedHat).scrollIntoView().should('be.visible').click();
        cy.wait(1000);
      });

    it("Should navigate between images 1 and 2 using arrrows",()=>{
      
        //assertions


        //checks that image 1 is displayed when page is loaded
        cy.get(ProductDetailsPage.p_ImageLabel_AfterPageLoad)
        .should('be.visible')
        .should('contain.text','Image 1');

        cy.get(ProductDetailsPage.btnPreviousArrow).should('not.exist');
        cy.get(ProductDetailsPage.btnNextArrow).should('be.visible').click();

        //checks that image 2 is displayed after the "next" arrow is clicked
        cy.get(ProductDetailsPage.p_ImageLabel_AfterClickingArrow)
        .should('be.visible')
        .should('contain.text','Image 2');

        cy.get(ProductDetailsPage.btnNextArrow).should('not.exist');
        cy.get(ProductDetailsPage.btnPreviousArrow).should('be.visible').click();
        
        //checks that image 1 is displayed after the "previous" arrow is clicked
        cy.get(ProductDetailsPage.p_ImageLabel_AfterClickingArrow)
        .should('be.visible')
        .should('contain.text','Image 1');


    });

    it("Should be able to increase and decrease quantity",()=>{
       
        //assertions

        //increase qty
        cy.get(ProductDetailsPage.btnIncreaseQty).should('be.visible').click();
        cy.get(ProductDetailsPage.inputQty).should('contain.value','2');

        cy.wait(1000);

        //decrease qty
        cy.get(ProductDetailsPage.btnDecreaseQty).should('be.visible').click();
        cy.get(ProductDetailsPage.inputQty).should('contain.value','1');

        
    });

    it.only("Should be able to navigate back to products gallery page",()=>{


        //assertions
        cy.get(ProductDetailsPage.linkBackToProducts).should('be.visible').click();

       
        cy.url().should('', 'https://qualityworkscg.com/automation-bootcamp/');


    });
    

});