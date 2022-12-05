export class DetailsPage{
    enterFirstName(firstName){
        cy.get('[data-test="firstName"]').type(firstName);
    }
    enterLastname(lastName){
        cy.get('[data-test="lastName"]').type(lastName)
    }
    enterZipCode(postalCode){
        cy.get('[data-test="postalCode"]').type(postalCode)
    }
    clickContinue(){
        cy.get('[data-test="continue"]').click();
    }
}