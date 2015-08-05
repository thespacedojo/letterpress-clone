Feature: Create a Landing Page

  As an technical author
  I want to create a landing page
  So that I can entice visitors to purchase my content

  @dev
  Scenario: Visitors can view the landing page
    Given I have created a landing page
    When a visitor navigates to the page
    Then they see the cover image from "/cover.jpg"
    And they see the tag-line "Learn how to do something"