var userlogin = require('../../fixtures/userlogin.json');
export default class HomePage {
  private myAccountIcon = ".account > a > img"
  private allProducts = ".products"

  validateLogin(expected) {

    if (expected == 'valid') {
      cy.get(this.myAccountIcon).should('be.visible').click();
      cy.get('.woocommerce-MyAccount-content > :nth-child(2) > :nth-child(1)').contains("uplearn03")
    }
    else {
      cy.get('div').contains("Unknown email address. Check again or try your username")
    }

  }

  verifyUserHomePage(expected) {

    cy.fixture('userlogin').then(function (data) {
      this.data = data
    })
    cy.get(this.myAccountIcon).should('be.visible').click();
    cy.get('.woocommerce-MyAccount-content > :nth-child(2) > :nth-child(1)').contains(userlogin.username)

  }

  addItemToTheCart() {
    cy.get('.search > img').click()
    cy.get('#search-form-1').type('apple')
    cy.get('.search-submit').click()
    cy.get('.products:visible').find('.product').eq(1).contains('Add to Basket').click()
    cy.get('.single_add_to_cart_button').click()
    cy.get('.basket > a > img').click();
    cy.get('div.remove > .remove').click()
    cy.get('.return-to-shop > .button').click()
  }

  saveState() {
    cy.saveLocalStorage();
  }

  restoreState() {
    cy.restoreLocalStorage();
  }

  flushState() {
    cy.clearLocalStorageSnapshot();
  }
}





