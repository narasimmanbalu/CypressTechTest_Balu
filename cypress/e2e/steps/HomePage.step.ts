import { Before, Given, When, Then, DataTable } from '@badeball/cypress-cucumber-preprocessor'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
const homepage = new HomePage
const loginPage = new LoginPage


Then("validate {string} result", function (expected) {
  homepage.restoreState()
  homepage.validateLogin(expected)
})

Then("the user should see the home page", function (name) {
  homepage.verifyUserHomePage(name)
  homepage.saveState()
})

Then("the user search for the item {string} and add to the cart", function (itemname) {
  homepage.addItemToTheCart(itemname)
})

Then("validate the number of item in the cart should be {string}", function (cartcount) {
  homepage.validateItemCount(cartcount)
})
