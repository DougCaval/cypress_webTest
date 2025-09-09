Feature: End to end Testing Page

  Scenario: Your First E2E Test Section
    Given I open the dashboard page
    When I click on End-to-end Testing option

  Scenario: Testing Your First App Section
    Given I open the dashboard page
    When I click on End-to-end Testing option
    And I click on Your first Test section
    And I confirm Get Started page is on "Your First Test"
    Then I should see the dashboard int the url "/writing-your-first-end-to-end-test"

  Scenario: Testing Your App Section
    Given I open the dashboard page
    When I click on End-to-end Testing option
    And I click on Testing your App section
    And I confirm Get Started page is on "Testing Your App"
    Then I should see the dashboard int the url "/testing-your-app"

