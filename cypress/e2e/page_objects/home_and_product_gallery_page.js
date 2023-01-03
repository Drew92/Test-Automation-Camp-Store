import Page from "./page";

class HomePage extends Page {

    //Home and Product Gallery Page getters

    get btnSignOut(){
        return (`#top-sign-out`);

    }  
    
    get imgQFittedHat(){
        return (`.chakra-image.css-2i84d9[src='/images/quality-hat-model.jpg']`);
    } 

    get btnHome(){
        return (`#top-home`);
    }  

    get iFrame(){
        return (`iframe[title='Automate Your Quality Assurance Testing']`);
    }
    
    get iFrameVideo(){
        return (`.video-stream`);
    } 

    get btnAbout(){
        return (` #top-about`);
    } 

    get linkAbout(){
        return (`a[href='https://qualityworkscg.com/automation-bootcamp/']`);
    }


    get btnAddToCart_QFittedHat(){
        return (`button[data-item-id="quality-hat-model"]`);
    } 

    get btnIncreaseQty_QFittedHat(){
        return (`#product-0-increase`);
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
   
    //HomePage object methods

    addQFittedHatMoreThanOnce(increaseQtyBy2){
        cy.get(this.btnAddToCart_QFittedHat).scrollIntoView();
        cy.wait(3000);

        if(increaseQtyBy2){
            cy.get(this.btnIncreaseQty_QFittedHat).should('be.visible').click().click(); //increases item qty by 2
        }
        cy.get(this.btnAddToCart_QFittedHat).should('be.visible').click();
         
    } 

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