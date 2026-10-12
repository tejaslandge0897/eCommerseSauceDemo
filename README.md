# Sauce Demo — Playwright Automation Framework

## Project Overview

This project contains a UI automation framework built using **Playwright and TypeScript** to test the Sauce Demo e-commerce application.

The framework follows the Page Object Model (POM), separates test data from test logic, supports authenticated test execution, and integrates with GitHub Actions for Continuous Integration (CI).

**Application under test:** https://www.saucedemo.com

## Tech Stack

- Playwright
- TypeScript
- Node.js
- Page Object Model (POM)
- JSON-based test data
- Git and GitHub
- GitHub Actions

## Framework Features

- Page Object Model for reusable page interactions.
- Authentication setup using Playwright storage state.
- External JSON files for user credentials, product data, and checkout data.
- Parallel test execution.
- Automatic waiting and assertion support provided by Playwright.
- Screenshots and videos retained on test failures according to the Playwright configuration.
- HTML test reporting.
- GitHub Actions workflow for automated test execution on pushes and pull requests.

## Project Structure

```text
eCommerseSauceDemo/
├── .github/
│   └── workflows/
│       └── playwright.yml
├── pages/
│   ├── LoginPage.ts
│   ├── ProductPage.ts
│   ├── CartPage.ts
│   ├── CheckOutPage.ts
│   ├── CheckOutOverViewPage.ts
│   └── CheckOutCompletePage.ts
├── test-data/
│   ├── users.json
│   ├── products.json
│   └── checkOut.json
├── tests/
│   ├── api/
│   ├── auth/
│   ├── cart/
│   ├── checkout/
│   ├── login/
│   └── products/
├── playwright.config.ts
├── package.json
├── package-lock.json
├── tsconfig.json
├── .env.example
└── .gitignore
```

### Folder Responsibilities

- **pages/** — Page Object Model classes containing page locators and reusable actions.
- **tests/** — Automated UI tests, authentication setup, and API practice tests.
- **test-data/** — JSON files containing test input data.
- **.github/workflows/** — GitHub Actions CI workflow.
- **playwright.config.ts** — Test configuration, browser settings, parallel execution, and reporting.
- **.env.example** — Example environment configuration.

## Prerequisites

Install the following before running the project:

- Node.js (an active LTS version is recommended).
- npm.
- Git.
- Visual Studio Code or another code editor.

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/tejaslandge0897/eCommerseSauceDemo.git
cd eCommerseSauceDemo
```

### 2. Install dependencies

```bash
npm ci
```

### 3. Configure the environment

Create a local `.env` file by copying `.env.example`.

On Windows PowerShell:

```powershell
Copy-Item .env.example .env
```

Ensure `.env` contains:

```env
BASE_URL=https://www.saucedemo.com
```

Do not commit `.env` or authentication-state files to Git.

### 4. Install Playwright browsers

```bash
npx playwright install
```

On Linux CI environments, install the browser system dependencies with:

```bash
npx playwright install --with-deps
```

## Running Tests

### Run the complete Chromium test suite

```bash
npx playwright test --project=chromium
```

### Run tests in parallel

The framework enables parallel execution through its Playwright configuration. The number of workers can vary according to the environment.

```bash
npx playwright test --project=chromium
```

### Run a specific test file

```bash
npx playwright test tests/products/product.spec.ts --project=chromium
```

### Run the login test

```bash
npx playwright test tests/login/Login.spec.ts --project=chromium
```

### Open the HTML report

```bash
npx playwright show-report
```

## Authentication Strategy

The framework uses a Playwright setup project to authenticate a user and save browser storage state to:

```text
playwright/.auth/user.json
```

Authenticated Chromium tests reuse this state instead of performing a fresh login in every test.

The authentication state is generated during test setup and is excluded from Git through `.gitignore`.

The login test overrides the saved storage state so it can verify the login flow independently.

## Test Data Management

Test data is maintained separately from test logic in JSON files:

- `users.json` — Sauce Demo test credentials.
- `products.json` — Product information used by tests.
- `checkOut.json` — Checkout customer information.

This separation makes test data easier to update and maintain.

## Continuous Integration

The project uses GitHub Actions to execute Playwright tests automatically.

**Workflow file:** `.github/workflows/playwright.yml`

The pipeline performs these steps:

1. Checks out the repository.
2. Sets up Node.js.
3. Installs project dependencies.
4. Installs Playwright browsers and system dependencies.
5. Runs the Playwright test suite.
6. Uploads the Playwright HTML report artifact.

The workflow runs on pushes and pull requests targeting the `main` or `master` branches.

GitHub Actions supplies the `BASE_URL` environment variable to the test process. CI runs the browser in headless mode.

## API Testing

The repository also contains basic Playwright API tests demonstrating GET and POST requests, HTTP status validation, and JSON response assertions.

These API examples use JSONPlaceholder as a practice API and are separate from the Sauce Demo UI application.

## Reporting and Debugging

The framework configures Playwright to collect useful debugging information:

- HTML test reports.
- Screenshots on test failure.
- Videos retained on test failure.
- Traces on the first retry.

Test reports and generated artifacts are excluded from normal Git tracking where configured in `.gitignore`.

## Repository

GitHub: https://github.com/tejaslandge0897/eCommerseSauceDemo

## Future Improvements

- Expand test coverage for additional product and checkout scenarios.
- Introduce reusable custom fixtures.
- Add test execution across additional browsers where required.
- Improve test reporting and failure diagnostics.
- Add further API tests when suitable application endpoints are available.

Jenkins SCM polling verification.