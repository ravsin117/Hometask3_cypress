/// <reference types ='cypress'/>

const { CartPage } = require("./PageObj/cartPage");
const { CheckoutPage } = require("./PageObj/checkOutPage");
const { DetailsPage } = require("./PageObj/detailsPage");
const { LoginPage } = require("./PageObj/loginPage");
const { ProductPage } = require("./PageObj/productPage");

const loginPage = new LoginPage()
const productPage = new ProductPage();
const cartPage = new CartPage()
const detailsPage = new DetailsPage();
const checkOutPage = new CheckoutPage()
it('logins to login page',()=>{
    cy.visit('https://www.saucedemo.com/');
    loginPage.enterUserName('standard_user');
    loginPage.enterPassword('secret_sauce');
    loginPage.clickLogin();
    productPage.additemsinCart();
    cy.wait(1000)
    cy.get('.shopping_cart_link').click();
    cy.wait(1000);
    cartPage.verifyPrices()
    cartPage.remove1Item();
    cartPage.clickCheckOutbtn();
    detailsPage.enterFirstName('Raj');
    detailsPage.enterLastname('Singh');
    detailsPage.enterZipCode('2324');
    detailsPage.clickContinue();
    checkOutPage.verifyPrice();
    checkOutPage.clickFinish();
})
