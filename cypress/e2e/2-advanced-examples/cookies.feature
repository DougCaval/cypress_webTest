Feature: Cookies Page

    Scenario: Cookies page interactions
        Given example to-do app on Cookies page
        And get a browser cookie
        And get browser cookies for the current domain
        And get all browser cookies
        And set a browser cookie
        And clear a browser cookie
        And clear browser cookies for the current domain
        And clear all browser cookies