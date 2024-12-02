@cypressTest
Feature: Login to thevegboxcompany website using data table feed

   Background:
      Given user navigate to login page
      Then confirm "Login" label on the login page

  @dataDriven
   Scenario: Validate login page using data table user details
      Given the user is on the 'Login' page
      When user reads login details from data table
      When the user clicks on login button
      Then the user should see the home page
