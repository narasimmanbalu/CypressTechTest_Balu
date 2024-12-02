import HomePage from './HomePage'
var userlogin = require('../../fixtures/userlogin.json');
new HomePage;
export default class LoginPage {
    private url = 'https://thevegboxcompany.co.uk/'
    private loginIcon = '.account'
    private userName = '#username'
    private loginPassword = '#password'
    private loginButton = ':nth-child(3) > .woocommerce-button'
    
    login(username: string, password: string) {
        cy.get('#username').type(username);
        cy.get('#password').type(password);
        cy.get('button[type=submit]').click();
    }

    navigateToLandingPage(): void {
        cy.visit(this.url)
        cy.get(this.loginIcon).click()
        cy.get(this.loginPassword, { timeout: 2000 }).should('be.visible');
    }

    validateTitle(title: string) {
        cy.get('body').should('be.visible')
    }

    enterUserNameAndPassword(username, password) {
        cy.get(this.userName).type(username)  
        cy.get(this.loginPassword).type(password)
    }

    dataTableLoginDetails() {
        cy.fixture('userlogin').then(function (data) {
            this.data = data
        })
        cy.get(this.userName).type(userlogin.username)
        cy.get(this.loginPassword).type(userlogin.password)
    }

    clickOnLoginButton() {
        cy.get(this.loginButton).click();
    }

}

