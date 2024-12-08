@cypressTest
Feature: API Testing with Scenario Outline

  @getapi
  Scenario Outline: Validate API GET response for valid URL
    Given user sends GET request to the API "<url>"
    Then the GET response status code should be '<statusCode>'

    Examples:
      | url                                  | statusCode |
      | https://gorest.co.in/public/v2/users | 200        |

  Scenario Outline: Validate API GET response for invalid URL
    Given user sends GET request to the API "<url>"
    Then the GET response status code should be '<statusCode>'

    Examples:
      | url                                  | statusCode |
      | https://gorest.co.in/public/v2/uses  | 404        |


  @postapi
  Scenario Outline: Validate API POST response for valid URL
    Given user sends POST request to the API "<url>"
    Then the valid POST response status code should be '<statusCode>'

    Examples:
      | url                                  | statusCode |
      | https://gorest.co.in/public/v2/users | 201        |

  Scenario Outline: Validate API POST response for invalid URL
    Given user sends POST request to the API "<url>"
    Then the invalid POST response status code should be '<statusCode>'

    Examples:
      | url                                 | statusCode |
      | https://gorest.co.in/public/v2/uses | 404        |
