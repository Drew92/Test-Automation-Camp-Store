/// <reference types="cypress" />

import AuthPage from '../page_objects/auth_pages'
import HomePage from '../page_objects/home_and_product_gallery_page'
import ProductDetailsPage from "../page_objects/product_details_page";
import FavoritesPage from '../page_objects/favorites_page'

describe("Test Favourites on Product Gallery Page",()=>{
    
    beforeEach(() => {
        AuthPage.open();
        cy.get(AuthPage.btnSignInOrRegister).click();
        AuthPage.login("drewtest@ahmail.com","bc123Quality");
    });

    it("Should add item to favourites on product gallery",()=>{
       
        HomePage.addQWFittedHatToFavs();

        //assertions
        cy.get(HomePage.divFavAddedOrRemovedAltert).should('be.visible').should('contain.text','Quality Fitted Hat added to favorites');

    });

    
    it("Should remove item from favourites on product gallery",()=>{
       

        HomePage.addQWFittedHatToFavs();
        cy.wait(2000);
        HomePage.removeQWFittedHatFromFavs();
        
        //assertions
        cy.get(HomePage.divFavAddedOrRemovedAltert).should('be.visible').should('contain.text','Quality Fitted Hat removed from favorites');

    });

});

describe("Test Favourites on Product Details Page",()=>{
    
    beforeEach(() => {
        AuthPage.open();
        cy.get(AuthPage.btnSignInOrRegister).click();
        AuthPage.login("drewtest@ahmail.com","bc123Quality");
        cy.wait(3000);
        cy.get(HomePage.imgQFittedHat).scrollIntoView().should('be.visible').click();
        cy.wait(2000);
    });


    it("Should add item to favourites on product details",()=>{
       
        
        ProductDetailsPage.addToFavs();
        cy.wait(2000);
         //assertions
         cy.get(ProductDetailsPage.divFavAddedOrRemovedAltert).should('be.visible').should('contain.text','Quality Fitted Hat added to favorites');

    });

    it("Should remove item from favourites on product details",()=>{
       

        ProductDetailsPage.addToFavs();
        cy.wait(2000);
        ProductDetailsPage.removeFromFavs();

         //assertions
         cy.get(HomePage.divFavAddedOrRemovedAltert).should('be.visible').should('contain.text','Quality Fitted Hat removed from favorites');
    });
    

});

describe("Test Favourites Page",()=>{
    
    beforeEach(() => {
        AuthPage.open();
        cy.get(AuthPage.btnSignInOrRegister).click();
        AuthPage.login("drewtest@ahmail.com","bc123Quality");
        HomePage.addQWFittedHatToFavs();
        cy.get(HomePage.btnFavorites).click();
    });


    it("Should remove item from favourites page",()=>{
       
        
        cy.wait(2000);
        FavoritesPage.removeQWFittedFromFavs();
        cy.wait(2000);



        //assertions
        cy.get(FavoritesPage.divFavAddedOrRemovedAltert).should('be.visible').should('contain.text','Quality Fitted Hat added to favorites');
        cy.get(FavoritesPage.p_AddFavouritesFromHomePageMessage).should('be.visible').should('contain.text','You can add favorites from the home page.');
    });
    
    

});