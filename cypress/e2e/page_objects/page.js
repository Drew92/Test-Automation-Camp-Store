module.exports = class Page {
  

   open () {
       cy.clearCookies(); //clears session cookies in browser before going the website
       return cy.visit(`/`);
   }

}