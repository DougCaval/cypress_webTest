Feature: Get Started Page

    Scenario Outline: Scenario Outline name
      Given I open the dashboard page
      When I click on Get Started option
      And I click on "<section>" section
      And I confirm Get Started page is on "<page>"
      Then I should see the dashboard int the url "<url>"

      Examples:
        | section               | page                     | url                    |
        | Why Cypress?          | Why Cypress?             | /why-cypress           |
       # | Run Your Tests        | Run Your Tests           | /run-your-tests        |
       # | Next Steps            | Next Steps               | /next-steps            |
       # | Additional Resources  | Additional Resources     | /additional-resources  |
        | FAQ                   | Frequently Asked Questions | /faq                   |
        #| Glossary              | Glossary                 | /glossary              |
        | Videos                | Videos                   | /app/guides/screenshots-and-videos |