@cypressTest
Feature: Login to thevegboxcompany website and add item to cart

   Background:
      Given user navigate to login page

   @login
   Scenario Outline: Verify Valid and invalid login
      When the user is on the 'Login' page
      Then user enters '<username>' and '<password>'
      Then the user clicks on login button
      Then validate '<expected>' result

      Examples:
         | username            | password          | expected |
         | uplearn03           | Incendioblast123* | valid    |
         | uplearn04@gmail.com | Invalidpassword   | Invalid  |

   @cart
   Scenario Outline: Add item to the shopping cart
      When the user is on the 'Login' page
      Then user reads login details from data table
      Then the user clicks on login button
      Then the user should see the home page
      Then the user search for the item '<itemname>' and add to the cart
      Then validate the number of item in the cart should be '<cartcount>'

      Examples:
         | itemname | cartcount |
         | apple    | 1         |