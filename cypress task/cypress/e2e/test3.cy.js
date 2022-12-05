/// <reference types ='cypress'/>
/// <reference types = "Cypress-iframe"/>
// import 'cypress-iframe'

describe('test suit 3',()=>{
    it('capture text from frame',()=>{
       cy.visit('https://the-internet.herokuapp.com/nested_frames') 
       cy.frameLoaded('frame[src="/frame_middle"]');
       cy.iframe('#content')
    })
})