Feature: categories and sub categories

Description: as a new user I want to create categories and sub categories
on Qubika Sport Club Managment website to a better organization

  Background:
    Given a new user is registered via API
    When the registered user goes to the website
    And the user is presented with the login form
    And the user enters valid credentials and submits the login form
    Then the user is successfully logged in

  Scenario: A new user wants to create a new category and sub category
    Given the user is on the category page
    When a new category is created via API with name "Test Category Parent"
    And the user is seeing the newly created category in the list
    When the user creates a new subcategory named "Test Sub category Child"
    Then the subcategory is successfully added to the category list and displayed
