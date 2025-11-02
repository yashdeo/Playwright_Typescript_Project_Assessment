Playwright TypeScript Project – Assessment

This repository contains an **end-to-end UI automation framework** built with **Playwright + TypeScript** using the **Page Object Model (POM)** design pattern.  
It supports **multi-environment execution** via `.env` files, shared **page fixtures**, and **CI/CD integration** through Azure DevOps or GitHub Actions.

---

## ⚙️ 1. Prerequisites

Before you begin, ensure the following are installed and configured on your machine:

### 🧩 System Requirements
| Requirement | Minimum Version | Check Command |
|--------------|-----------------|----------------|
| **Node.js** | 18.x or higher (recommended: 20.x) | `node -v` |
| **npm** | 8.x or higher | `npm -v` |
| **Git** | Any stable release | `git --version` |



---

## 🏗️ 2. Project Setup

### 🔹 Step 1 — Clone the repository
```bash
git clone https://github.com/yashdeo/Playwright_Typescript_Project_Assessment.git
cd Playwright_Typescript_Project_Assessment

— Install project dependencies
Use npm ci (preferred for CI consistency) or npm install

— Install Playwright browsers
npx playwright install --with-deps

This framework supports multi-environment execution using .env files stored under the .envs/ directory.
.envs/

 ├── .env.qa     → QA / Test environment
 └── .env.Prod    → Staging environment

Commands to run the suite
Running the Test Suite:- npx playwright test
To run for the specific browser and headed mode :- npx playwright test --headed --project=chromium
To see the generated report :- npx playwright show-report

Project Structure

Playwright_Typescript_Project_Assessment/
├── .envs/                  # Environment config files (.env.qa, .env.dev, etc.)
├── .github/workflows/      # GitHub Actions (optional CI)
├── .azure-pipelines.yml    # Azure DevOps pipeline configuration
├── Hooks/                  # Global hooks (setup/teardown logic)
├── PageObjects/            # Page classes (LandingPage, BookingPage, AdminPage, etc.)
├── tests/UI/               # UI test specifications
├── testData/               # External test data (JSON/configs)
├── utilities/              # Reusable helpers & utilities
├── playwright.config.ts    # Global Playwright configuration
├── package.json            # Dependencies & npm scripts
└── tsconfig.json           # TypeScript compiler setup

Core Features (What It Does)

-Playwright + TypeScript based test automation

-Page Object Model (POM) for maintainability

-Custom allPages fixture for shared page objects
-Environment-based execution with dotenv

-Supports multiple browsers (Chromium, Firefox, WebKit)

-Ready for CI/CD via Azure DevOps or GitHub Actions

-Centralized hooks, utilities, and test data



LIMITATTIONS

- Please note :- I tried many times trying to run it from the Azure or AWS but there is some issue. I did not spend time to investigateit, aplogies. 
_ No Allure / advanced reports (only Playwright HTML)
-No Dockerfile for containerized execution

-No test tagging / filtering (@smoke, @regression, etc.)

- No global authentication storageState

-No API automation layer

- No ESLint / Prettier configuration yet

