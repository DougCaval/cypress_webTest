Feature: Connectors Page

    Scenario: Connectors page interactions
        Given example to-do app on Connectors page
        And iterate over an array of elements
        And get properties on the current subject
        And invoke a function on the current subject
        And spread an array as individual args to callback function
        And invokes a callback function with the current subject
        And yields the returned value to the next command
        And yields the original subject without return
        And yields the value yielded by the last Cypress command inside