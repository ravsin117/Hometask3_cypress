export class CartPage{
    verifyPrices(){
        cy.contains('29.99').should('have.text','$29.99');
        cy.contains('$9.99').should('have.text','$9.99');
        let prod1price = 29.99
        let prod2price = 9.99;
        expect(prod1price+prod2price).to.be.eq(29.99+9.99)
    }
    remove1Item(){
        cy.get('[data-test="remove-sauce-labs-bike-light"]').click();
    }
    clickCheckOutbtn(){
        cy.get('[data-test="checkout"]').click();
    }
}