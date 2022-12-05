export class VerifyPage{
    enterText(text){
        cy.get('#target').type(text);
    }
    verifyText(){
        cy.get('#result').should('have.text','You entered: BACK_SPACE');
    }
    
}