
# QA-TestingAutomation-QSCMS

## Overview:

This project demonstrates how to effectively use Cucumber.js and Playwright to automate the entire workflow of the Qubika Sports Club management website. By combining API and UI testing within the same test suite, this approach ensures comprehensive coverage and helps identify potential issues early in the development process.

## Prerequisites:
- _Node.js and npm_: Ensure you have Node.js and npm (Node Package Manager) installed on your system.
- _Chromium browser_: Download and install the latest version of Chromium.

## Getting Started:

**1. Clone the Repository:**

 ``` [Git] 
 git clone https://github.com/LauraITP8/QA-TestingAutomation-QSCMS.git
 ```
**2. Install Dependencies:**

 ```console 
 npm install && npx playwright install
 ```
**3. Run Tests:**
 ```console 
 npm test
 ```

## Project Structure:

`features/:` Contains feature files written in Gherkin syntax, describing the desired behavior of the application.

`step_definitions/:` Contains step definitions that map Gherkin steps to actual actions performed using Playwright.

`cucumber.js:` Configures cucumber settings, in this case is our runner, and reporting options.

## future project improvements:

* Data-Driven Testing: Use data tables in our features files to parameterize tests and execute them with different data sets.

* Custom Reporters: Explore different reporting options to visualize test results and identify trends.

* Parallel Execution: Configure Playwright to run tests in parallel for faster execution times.

* Integration with CI/CD: Integrate this project into your continuous integration and continuous delivery pipeline for automated testing.


![Alt Text](https://cdn.dribbble.com/users/3218310/screenshots/6526668/samolot_loop_2.gif)