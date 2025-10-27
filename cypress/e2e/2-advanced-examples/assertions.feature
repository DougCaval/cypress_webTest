Feature: Asertions Page

    Scenario: Implicit Assertions page interactions
        Given example to-do app on Assertions page
        And make an assertion about the current subject
        And chain multiple assertions together

        Scenario: Explicit Assertions page interactions
        Given example to-do app on Assertions page
        And make an assertion about a specified subject
        And pass your own callback function to should
        And finds element by class name regex
        And can throw any error
        And matches unknown text between two elements
        And assert - assert shape of an object
        And retries the should callback until assertions pass
