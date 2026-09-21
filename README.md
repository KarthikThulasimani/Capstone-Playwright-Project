# Capstone Playwright Automation Project

## Project Overview

This project is an end-to-end automation framework developed using **Playwright with TypeScript**.

The automation covers user registration, login, product search, product filtering, cart management, checkout, and multiple payment methods.

The framework follows the **Page Object Model (POM)** design pattern and uses reusable fixtures, locators, test data, and environment configuration.

## Application

**Application URL:** https://practicesoftwaretesting.com/

## Technologies Used

* TypeScript
* Playwright
* Node.js
* npm
* Page Object Model (POM)
* JSON Test Data
* dotenv
* Git & GitHub
* Jenkins
* Allure Report

## Project Structure

CAPSTONE PLAYWRIGHT PROJECT
│
├── config/
│   ├── .env.qa
│   └── environment.ts
│
├── fixtures/
│   └── testFixure.ts
│
├── locators/
│   ├── CartLocators.ts
│   ├── CheckoutLocators.ts
│   ├── HomeLocators.ts
│   ├── LoginLocators.ts
│   ├── ProductLocators.ts
│   └── RegisterLocators.ts
│
├── pages/
│   ├── RegisterPage.ts
│   ├── LoginPage.ts
│   ├── HomePage.ts
│   ├── ProductPage.ts
│   ├── CartPage.ts
│   └── CheckoutPage.ts
│
├── test-data/
│   └── testData.json
│
├── tests/
│   └── end-to-end.spec.ts
│
├── Jenkinsfile
├── playwright.config.ts
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md


## Page Object Model

The project follows this flow:


Test
  ↓
Fixture
  ↓
Page Object
  ↓
Locator
  ↓
Application


### Locator

Contains the application element locators.

### Page

Contains reusable actions and methods.

### Fixture

Creates and provides Page Object instances to tests.

### Test

Contains the actual end-to-end test scenarios.

## Application Pages

The framework contains the following Page Object classes:

1. `RegisterPage.ts`
2. `LoginPage.ts`
3. `HomePage.ts`
4. `ProductPage.ts`
5. `CartPage.ts`
6. `CheckoutPage.ts`

## Test Scenarios

The end-to-end suite contains 10 scenarios:

1. User Registration
2. Register and Login
3. Register, Login and Search Product
4. Register, Login and Complete Checkout
5. Register, Login, Sort Pliers and Bank Transfer Checkout
6. Price Range Search and Cash on Delivery Checkout
7. Chisels Category and Credit Card Checkout
8. ForgeFlex Brand and Buy Now Pay Later Checkout
9. Sustainability Filter and Gift Card Checkout
10. Rental Excavator and Cash on Delivery Checkout

## Test Data

Test data is maintained separately in:


test-data/testData.json


The test data includes:

* User information
* Address information
* Login credentials
* Bank details
* Credit card details
* Gift card details

A unique email address is generated during registration tests to avoid duplicate-user conflicts.

## Environment Configuration

The QA environment is configured in:


config/.env.qa


Example:


BASE_URL=https://practicesoftwaretesting.com


The environment configuration is loaded using `dotenv`.

## Installation

Clone the repository and open the project folder.

Install dependencies:

```bash
npm ci
```

Install Playwright browsers:

```bash
npx playwright install
```

## Run Tests

Run the complete end-to-end test suite:

```bash
npx playwright test tests/end-to-end.spec.ts
```

Run using Chromium:

```bash
npx playwright test tests/end-to-end.spec.ts --project=chromium
```

Run in headed mode:

```bash
npx playwright test tests/end-to-end.spec.ts --headed
```

## Browser Coverage

The project executes tests against:

* Chromium
* Firefox
* WebKit

The complete suite contains:


10 scenarios × 3 browsers = 30 tests


## Playwright Configuration

The project uses:

* TypeScript
* Base URL from environment configuration
* Multiple browser projects
* Headed execution configuration
* Screenshot on failure
* Trace retention on failure
* Test retries in Jenkins

## Allure Report

Allure is integrated with Playwright for test reporting.

Allure results are generated in:


allure-results/


The generated Allure report provides:

* Test execution summary
* Passed tests
* Failed tests
* Test duration
* Test details
* Browser execution information

## Jenkins CI/CD

Jenkins is used to execute the Playwright automation suite as part of CI/CD.

The Jenkins pipeline performs:

1. Checkout source code from GitHub
2. Install npm dependencies
3. Install Playwright browsers
4. Execute Playwright tests
5. Archive test results
6. Generate Allure report
7. Archive the Allure report

## Jenkins Result

Latest successful Jenkins execution:


30 passed
0 failed
0 flaky


Execution time:


2.7 minutes


Tests were executed using:


Chromium
Firefox
WebKit


## Allure Result

Latest Allure report:


Total: 30
Passed: 30
Failed: 0


## Version Control

Git and GitHub are used for source-code management.

The project is maintained on the `main` branch.

## Framework Highlights

* Page Object Model
* Reusable fixtures
* Centralized locators
* Externalized test data
* Environment configuration
* Multi-browser execution
* End-to-end checkout validation
* Multiple payment-method validation
* Allure reporting
* Jenkins CI/CD integration
* GitHub source control

## Final Result

The complete Playwright end-to-end automation suite successfully executes **30 tests across Chromium, Firefox, and WebKit**, with the latest Jenkins and Allure executions reporting **30 passed tests**.
