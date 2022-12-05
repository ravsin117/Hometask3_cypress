export class CheckoutPage{
    verifyPrice(){
        cy.get('.inventory_item_price').should('have.text','$29.99');
    }
    clickFinish(){
        cy.get('[data-test="finish"]').click();
    }
}