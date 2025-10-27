Feature: Get Started Page

    Scenario Outline: Scenario Outline name
      Given I open the dashboard page
      When I click on Get Started option
      And I click on Open the App section
      And I confirm Get Started page is on "<page>"
      Then I should see the dashboard int the url "<url>"

      Examples:
        | section               | page                     | url                    |
        | Write Your First Test | "Why Cypress?"           | /why-cypress |
        | Run Your Tests        | Run Your Tests           | /run-your-tests        |
        | Next Steps            | Next Steps               | /next-steps            |
        | Additional Resources  | Additional Resources     | /additional-resources  |
        | FAQ                   | FAQ                      | /faq                   |
        | Glossary              | Glossary                 | /glossary              |
        | Videos                | Videos                   | /videos                |