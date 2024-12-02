

# CypressTechTest Project

This project is based on BDD Cucumber framework using cypress and typescript

Webite user doe demo - https://thevegboxcompany.co.uk/

## Installation Guide

Please follow the steps below to install the required plugins:

1. Install TypeScript and ts-loader:
   npm install typescript ts-loader --save-dev

2. Install Cypress and Cypress Cucumber Preprocessor:
   npm install cypress cypress-cucumber-preprocessor --save-dev

3. Install Cypress ESBuild Preprocessor:
   npm i -D cypress @bahmutov/cypress-esbuild-preprocessor

4. Install Cypress XPath:
   npm install -D @cypress/xpath

*** Guide to Running tests ***

** Run the below command in Terminal to run test **

npm test

## Running tagged tests for example smoke

# defined in package.json file
npm run tag:smoke

### Running using customized tags

npx cypress run --env tags="@cypressTest"

# Running tests locally

npx cypress open

# Running tests parallelly

npm run cypress:parallel