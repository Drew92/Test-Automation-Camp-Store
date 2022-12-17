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

    it("Should sort item prices high to low",()=>{
       
        HomePage.selectSortOption(campStoreProducts.sort['High to Low']);

        // Sort data list based on price, from high to low
        campStoreProducts.productList.sort((a, b) => b.price - a.price);

        cy.wait(3000);

        //compare sorted list of items with sorted array
        cy.get(HomePage.p_ProductPrice).each(($elem, index) => {
            expect($elem.text()).equal(`$${campStoreProducts.productList[index].price}`)
        });

    });

    it("Should sort item names A to Z",()=>{

        // Sort data list based on names, from a to z
        HomePage.selectSortOption(campStoreProducts.sort['A to Z']);        
        const sortedList=HomePage.alphabeticalSort(campStoreProducts.productList)

        cy.wait(3000);

        
        //compare sorted list of items with sorted array
        cy.get(HomePage.p_ProductName).each(($elem, index) => {
            expect($elem.text()).equal(sortedList[index].name)
        });

    });

    it("Should filter by ‘Shoes’ category",()=>{

        cy.wait(2000);

        HomePage.selectCategoryOption(campStoreProducts.category[3]); //select shoes category 

        cy.wait(3000);

        //check that list of displayed items are shoes
        cy.get(HomePage.p_ProductName).each((product) => {
            expect(product.text()).contain('Shoes');
        });

    });
    

});