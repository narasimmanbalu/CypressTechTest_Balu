@cypressTest
Feature: Login to thevegboxcompany website using data table feed

   Background:
      Given user navigate to login page

  @dataDriven
   Scenario: Validate login page using data table user details
      When the user is on the 'Login' page
      Then user reads login details from data table
      Then the user clicks on login button
      Then the user should see the home page
