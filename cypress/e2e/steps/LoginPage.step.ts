/// <reference types="cypress"/>
import { Before, Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import HomePage from '../pages/HomePage'
import { should } from 'chai'
import { add } from 'cypress/types/lodash'
import LoginPage from '../pages/LoginPage'
const homePage = new HomePage
const loginPage = new LoginPage

Before(function () {
  cy.fixture('userlogin').then(function (data) {
    this.data = data
  })
})

Given('user navigate to login page', function () {
  homePage.flushState()
  loginPage.navigateToLandingPage()
})

Then('confirm {string} label on the login page', (title: string) => {
  loginPage.validateTitle(title)
})

When('the user is on the {string} page', (title: string) => {
  loginPage.validateTitle(title)
})

Then('user enters {string} and {string}', function (username, password) {
  loginPage.enterUserNameAndPassword(username, password)
})

Then('user reads login details from data table', function () {
  loginPage.dataTableLoginDetails()
})

Then('the user clicks on login button', function () {
  loginPage.clickOnLoginButton()
})

