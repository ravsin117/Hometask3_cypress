describe('test suit 4',()=>{
    it('hover mouse to profile 2 and verify',()=>{
        cy.visit('https://the-internet.herokuapp.com/hovers')
        cy.get(':nth-child(4) > img').trigger('mouseover').click()
    })
})