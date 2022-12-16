/// <reference types="cypress" />

import AuthPage from '../page_objects/auth_pages'
import HomePage from '../page_objects/home_and_product_gallery_page'
import campStoreProducts from '../data/camp_store_products'

describe("Sorting and Filter Tests",()=>{
    
    beforeEach(() => {
        AuthPage.open();
        cy.get(AuthPage.btnSignInOrRegister).click();
        AuthPage.login("drewtest@ahmail.com","bc123Quality");

      });

    it("Should filter products using valid search criteria (eg. Quality and ouch)",()=>{
       
        let searchCriteria1='Quality', searchCriteria2='ouch'
       
        HomePage.enterSearchInfo(searchCriteria1); //search using first criteria
       
        cy.wait(2000);

        //check that list of displayed items are proudcts with the word "Quality"
        cy.get(HomePage.p_ProductName).each((product) => {
            expect(product.text()).contain(searchCriteria1);
        });

        
        cy.wait(7000);
        HomePage.enterSearchInfo(searchCriteria2); //search using second criteria
       
        cy.wait(2000);

        //check that list of displayed items are proudcts with the syllable "ouch"
        cy.get(HomePage.p_ProductName).each((product) => {
            expect(product.text()).contain(searchCriteria2);
        });

    });

    it("Should display no products when invalid search criteria is entered (eg. phone)",()=>{

        cy.get(HomePage.inputSearch).should('be.visible').type('phone'); //invalid search criteria entered
       
        cy.wait(2000);

        //check that none of the products from the gallery are displayed.
        cy.get(HomePage.p_ProductName).should('not.exist');
    });

    it("Should empty search field using reset button",()=>{

        HomePage.enterSearchInfo('ouch');
       
        cy.wait(2000);

        //check that list of displayed items are proudcts with the syllable "ouch"
        cy.get(HomePage.p_ProductName).each((product) => {
            expect(product.text()).contain('ouch');
        });

        cy.get(HomePage.btnReset).click();

        //check that all items in the product list are displayed in there default order in the gallery 
        cy.get(HomePage.p_ProductName).each(($elem, index) => {
            expect($elem.text()).equal(campStoreProducts.productList[index].name)
        });
    });
    

});