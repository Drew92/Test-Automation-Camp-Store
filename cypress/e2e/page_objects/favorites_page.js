import Page from "./page";

class FavouritesPage extends Page {

    //Page getters


    get btnRemoveFromFavs(){
        return (`#remove-favorite-btn`);
    }

    get p_AddFavouritesFromHomePageMessage(){
        return (`.chakra-text.css-jneyc`);
    }
    
    //Page object methods

    removeQWFittedFromFavs(){
        cy.get(this.btnRemoveFromFavs).should('be.visible').click();
    }


}
module.exports = new FavouritesPage();