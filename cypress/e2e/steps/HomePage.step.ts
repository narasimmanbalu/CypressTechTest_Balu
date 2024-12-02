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


When("the user adds the items to the cart", function () {
  homepage.addItemToTheCart()
})