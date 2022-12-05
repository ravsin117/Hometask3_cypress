import { VerifyPage } from "./PageObj/verifytextpage";

const verifyPage = new VerifyPage()
describe('test suit 5',()=>{
    it('verifying text entered is backspace',()=>{
        cy.visit('https://the-internet.herokuapp.com/key_presses');
        verifyPage.enterText('{backspace}');
        verifyPage.verifyText();
    })
})