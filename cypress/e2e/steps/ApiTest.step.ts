import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import ApiTestCode from "../pages/ApiTestCode"


const apitest = new ApiTestCode

Given('user sends GET request to the API {string}', (url) => {
    apitest.sendGetRequest(url)
})

Given('user sends POST request to the API {string}', (url) => {
    apitest.sendPostRequest(url)
})

Then('the GET response status code should be {string}', (statusCode) => {
    apitest.validateGetResponse(statusCode)
})

Then('the valid POST response status code should be {string}', (statusCode) => {
    apitest.validateValidPostResponse(statusCode)
})

Then('the invalid POST response status code should be {string}', (statusCode) => {
    apitest.validateInvalidPostResponse(statusCode)
})