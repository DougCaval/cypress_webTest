Feature: Spies Stubs Clocks Feature

    Scenario: Spies Stubs Clocks interactions
        Given wrap a method in a spy
        And retries until assertions pass
        And create a stub and/or replace a function with stub
        And move time in the browser
        And matches depending on arguments
        And matches call arguments using Sinon matchers