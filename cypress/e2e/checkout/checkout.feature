Feature: Saucedemo store Checkout

  Scenario: Successful checkout
    Given the user is logged into saucedemo
    And the user has at least one product in the cart
    And is on the checkout page
    When fills in the "First Name" field with "Alexandre"
    And fills in the "Last Name" field with "Martins"
    And fills in the "Postal Code" field with "12345"
    And clicks on "Continue"
    Then should be redirected to the order overview page

  Scenario: Checkout without First Name
    Given the user is logged into saucedemo
    And the user has at least one product in the cart
    And is on the checkout page
    When fills in the "Last Name" field with "Martins"
    And fills in the "Postal Code" field with "12345"
    And leaves the "First Name" field empty
    And clicks on "Continue"
    Then the message "Error: First Name is required" should be displayed

  Scenario: Checkout without Last Name
    Given the user is logged into saucedemo
    And the user has at least one product in the cart
    And is on the checkout page
    When fills in the "First Name" field with "Alexandre"
    And fills in the "Postal Code" field with "12345"
    And leaves the "Last Name" field empty
    And clicks on "Continue"
    Then the message "Error: Last Name is required" should be displayed

  Scenario: Checkout without Postal Code
    Given the user is logged into saucedemo
    And the user has at least one product in the cart
    And is on the checkout page
    When fills in the "First Name" field with "Alexandre"
    And fills in the "Last Name" field with "Martins"
    And leaves the "Postal Code" field empty
    And clicks on "Continue"
    Then the message "Error: Postal Code is required" should be displayed

  Scenario: Cancel checkout
    Given the user is logged into saucedemo
    And the user has at least one product in the cart
    And is on the checkout page
    When clicks on the "Cancel" button
    Then should be redirected to the cart page