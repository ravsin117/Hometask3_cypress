
export class LoginPage{

    enterUserName(Username){
        cy.get('[data-test="username"]').type(Username);

    }

    enterPassword(password){
        cy.get('[data-test="password"]').type(password);
    }
    clickLogin(){
        cy.get('[data-test="login-button"]').click();
    }
    
}



