Feature: Get Started Page

  Scenario: Why Cypress Section
    Given I open the dashboard page
    When I click on Get Started option
    And I confirm Get Started page is on "Why Cypress?"
    Then I should see the dashboard int the url "/why-cypress"

  Scenario: Install Cypress Section
    Given I open the dashboard page
    When I click on Get Started option
    And I click on Install Cypress section
    And I confirm Get Started page is on "Installation"
    Then I should see the dashboard int the url "/install-cypress"

  Scenario: Open the App Section
    Given I open the dashboard page
    When I click on Get Started option
    And I click on Open the App section
    And I confirm Get Started page is on "Open the App"
    Then I should see the dashboard int the url "/open-the-app"