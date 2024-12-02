@cypressTest
Feature: Login to thevegboxcompany website and add item to cart

   Background:
      Given user navigate to login page
      Then confirm "Login" label on the login page

   @login
   Scenario Outline: Verify Valid and invalid login
      Given the user is on the 'Login' page
      When user enters '<username>' and '<password>'
      When the user clicks on login button
      Then validate '<expected>' result

      Examples:
         | username            | password          | expected |
         | uplearn03           | Incendioblast123* | valid    |
         | uplearn04@gmail.com | Invalidpassword   | Invalid  |

   @cart
   Scenario Outline: Add item to the shopping cart
      Given the user is on the 'Login' page
      When user reads login details from data table
      When the user clicks on login button
      Then the user should see the home page
      When the user adds the items to the cart