@cypressTest
Feature: validation of  API in gorest site

  @api
  Scenario: user send the GET request to API and validate the response
    Given user send get request via API

  @api
  Scenario: user send the POST request to API and validate the response
    Given user send post request via API
