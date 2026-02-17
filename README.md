# Playwright Practice

This repository contains a Playwright test project built with Node.js. It demonstrates browser automation using Playwright and provides a simple setup for running tests locally.

---

## Prerequisites

Before running this project, install:

- Node.js (v16 or higher recommended) → https://nodejs.org/
- Git → https://git-scm.com/

---

## Setup & Run the Project

Follow these steps to run the tests on your machine.

### 1. Clone the repository

```bash
git clone https://github.com/Amritha0998/playwright-practice.git
cd playwright-practice
```

### 2. Install dependencies

```bash
npm install
```

This installs all required packages listed in `package.json` and creates the `node_modules/` folder.

### 3. Install Playwright browsers

```bash
npx playwright install
```

This downloads Chromium, Firefox, and WebKit used for testing.

### 4. Run all tests

```bash
npx playwright test
```

### 5. Run a single test (optional)

```bash
npx playwright test tests/example.spec.js
```

---

## Project Structure

```
playwright-practice/
│
├── tests/                  # Playwright test files
│   └── example.spec.js
├── playwright.config.js     # Playwright configuration
├── package.json             # Project metadata & dependencies
├── package-lock.json        # Locked dependency versions
└── .gitignore               # Files ignored by Git (node_modules, etc.)
```

---

## Important Notes

- `node_modules/` is not included in the repository. Running `npm install` recreates it locally.
- Browser binaries are installed separately via `npx playwright install`.
- Commit both `package.json` and `package-lock.json` when adding dependencies.
- `.gitignore` ensures unnecessary files are not tracked.

---

## Git Identity Check (Optional)

To verify your Git identity:

```bash
git config --global user.name
git config --global user.email
```

To update if needed:

```bash
git config --global user.name "Your GitHub Username"
git config --global user.email "your_email@github.com"
```

---

## References

- Playwright Docs → https://playwright.dev/docs/intro
- Node.js Docs → https://nodejs.org/en/docs/
- Git Docs → https://git-scm.com/doc
