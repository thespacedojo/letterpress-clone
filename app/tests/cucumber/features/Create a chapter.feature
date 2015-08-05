Feature: Create a chapter

  As an author
  I want to create chapters
  So that I can sell them

  @dev
  Scenario: Create a chapter
    Given I created a "chapter" called "My Chapter" at "/chapter-x" with the following markdown
    """
        Holistic agencies is a reference form Douglas Adam's book Dirk Gently's Holistic Detective Agency
    """
    When a visitor navigates to the page
    Then  they see the heading "My Chapter"
    And   they see the content "Holistic agencies is a reference form Douglas Adam's book Dirk Gently's Holistic Detective Agency"
