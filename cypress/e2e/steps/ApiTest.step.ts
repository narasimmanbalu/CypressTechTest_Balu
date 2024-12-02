import {Given,When,Then} from '@badeball/cypress-cucumber-preprocessor'
import ApiTestCode from "../pages/ApiTestCode"


const apitest = new ApiTestCode

Given('user send get request via API', function() {
    apitest.validateGetResponse()
})

When('user send post request via API', function()  {
    apitest.validatePostResponse()
})
