
# Automation Camp Store - Test Automation Project

### Website URL: https://ui-automation-camp.vercel.app/

A Cypress test automation project for the Automation Camp Store (demo) website. 
This project executes the following workflows: 

* Authentication
* Adding to cart
* Cart manipulation
* Home and Product Gallery Page utilization
* Product Detials Page utilization 
* Item checkout
* Filtering and Sorting manipulation
* Search manipulation
* Contact Page utilization 

The project also contains:

* Negative Tests
* Data Driven Tests for Authentication and Contact Page utilization
* Uses the `Cypress Mochawesome Reporter`
* Uses the `NPM Faker` package.

## Instructions
- Navigate to the project's root directory in your Terminal.
- Enter the command `npm install` to initialize the project.
- Enter one of the given commands to run the respective test per browser or generate a report



### Commands

#### Cross Browser Testing

| Test (Workflow) | Chrome Browser | FireFox Browser | 
|--- | --- | --- |
|Authentication | $ npm run auth-tests-chr | $ npm run auth-tests-ffox |
| | | |
| Adding to cart | $ npm run add-to-cart-chr | $ npm run add-to-cart-ffox |
| | | |
| Cart manipulation | $ npm run cart-tests-chr | $ npm run cart-tests-ffox |
| | | |
| Home and Product Gallery Page utilization | $ npm run homepage-tests-chr| $ npm run homepage-tests-ffox |
| | | |
| Product Detials Page utilization  | $ npm run prod-details-chr | $ npm run prod-details-ffox |
| | | |
| Item checkout | $ npm run complete-checkout-chr | N/A |
| | | |
| Filtering and Sorting manipulation | $ npm run sort-fliter-chr | $ npm run sort-fliter-ffox |
| | | |
| Search manipulation | $ npm run search-test-chr | $ npm run search-test-ffox |
| | | |
| Contact Page utilization | $ npm run contact-page-chr | $ npm run contact-page-ffox |
| | | |
| Contact Page Data-Driven-Test | $ npm run ddt-contact-page-chr | $ npm run ddt-contact-page-ffox |
| | | |
| Authentication Data-Driven-Test | $ npm run ddt-auth-tests-chr | $ npm run ddt-auth-tests-ffox |

#### Generate Mochawesome Reports

| Test (Workflow) | Script|
| --- | --- |
|Authentication | $ npm run rpt-auth-tests | 
| | | 
| Adding to cart | $ npm run rpt-add-to-cart | 
| | | 
| Cart manipulation | $ npm run rpt-cart-tests |
| | | 
| Home and Product Gallery Page utilization | $ npm run rpt-homepage-tests | 
| | | 
| Product Detials Page utilization  | $ npm run rpt-prod-details | 
| | | 
| Item checkout | $ npm run rpt-complete-checkout | 
| | | 
| Filtering and Sorting manipulation | $ npm run rpt-sort-fliter | 
| | | 
| Search manipulation | $ npm run rpt-search-test |
| | | 
| Contact Page utilization | $ npm run rpt-contact-page | 
| | | 
| Contact Page Data-Driven-Test | $ npm run rpt-ddt-contact-page | 
| | | 
| Authentication Data-Driven-Test | $ npm run rpt-ddt-auth-tests | 


