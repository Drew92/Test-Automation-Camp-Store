import Page from "./page";

class HomePage extends Page {

    get btnSignOut(){
        return (`#top-sign-out`);
    }    

    get selectSortOptions(){
        return (`#sort`);
    } 

    get p_ProductName(){
        return (`.css-1n64n71`);
    }

    get p_ProductPrice(){
        return (`div>p[class='chakra-text css-0']`);
    }

    get selectCategory(){
        return (`#category`);
    } 
    

    //Page object methods

    selectSortOption(option){
        cy.get(this.selectSortOptions).should('exist').select(option);
    }

    alphabeticalSort(list){

        list.sort((a,b)=>{

            const nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
            if (nameA < nameB) //sort string ascending
                return -1;
            if (nameA > nameB)
                return 1;
            return 0;
            
        });
        return list;
    }

    selectCategoryOption(option){
        cy.get(this.selectCategory).should('exist').scrollIntoView().select(option);
    }
}
module.exports = new HomePage();