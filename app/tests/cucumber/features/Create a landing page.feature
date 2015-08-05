Feature: Create a Landing Page

  As an technical author
  I want to create a landing page
  So that I can entice visitors to purchase my content

  Scenario: Visitors can view the landing page
    Given I have created a landing page
    When a visitor navigates to the page
    Then they see the cover image from "/cover.jpg"
    And they see the tag-line "Learn how to do something"

  Scenario: See a table of content
    Given I have created a landing page
    And   I created a "chapter" called "Holistic Agencies" at "/holistic-agencies" with the following markdown
          """
          How to get a sofa into a room it won't fit in.
          """
    And   I created a "chapter" called "Forty Two" at "/forty-two" with the following markdown
          """
          The answer to life, universe and everything.
          """
    When  a visitor navigates to the page
    Then  they see the chapter "Holistic Agencies" in the table of contents with the description
          """
          How to get a sofa into a room it won't fit in.
          """
    And   they can navigate to "Holistic Agencies" at "holistic-agencies"
    And   they see the chapter "Forty Two" in the table of contents with the description
          """
          The answer to life, universe and everything.
          """
    And   they can navigate to "Forty Two" at "forty-two"
