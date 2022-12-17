module.exports = class Page {
  
    //Page obj getters 
    
    get divFavAddedOrRemovedAltert(){
        return (`.css-tidvy5`);
    }

    //Page obj methods

   open () {
       cy.clearCookies(); //clears session cookies in browser before going the website
       return cy.visit(`/`);
   }

}