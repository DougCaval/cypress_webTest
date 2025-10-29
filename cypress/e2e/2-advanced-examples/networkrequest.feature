Feature: Network Request Feature

    Scenario: Network Request interactions
        Given example to-do app on Network Request page
        And make an XHR request
        And with query parameters
        And pass result to the second request
        And save response in the shared test context
        And route responses to matching requests