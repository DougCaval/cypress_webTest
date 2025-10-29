Feature: Storage Feature

    Scenario: Storage interactions
        Given example to-do app on Storage Request page
        And clear all data in localStorage for the current origin
        And get all data in localStorage for all origins
        And get all data in sessionStorage for all origins
        And clear all data in sessionStorage for all origins