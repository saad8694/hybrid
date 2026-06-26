# Hybrid Playwright Automation Framework

A scalable Playwright automation framework for web, API, database, and mobile web testing.

## Key capabilities
- Web testing with Page Object Model
- API testing with reusable request layer
- Mobile emulator testing with Playwright device profiles
- Multi-browser execution across Chromium, Firefox, and WebKit
- Parallel execution and CI/CD readiness
- HTML, Allure, and JUnit reporting
- PostgreSQL integration and reusable test data patterns

## Getting started
1. Install dependencies:
   ```bash
   npm install
   npm run install:drivers
   ```
2. Run web tests:
   ```bash
   npm run test:web
   ```
3. Run API tests:
   ```bash
   npm run test:api
   ```
4. Run mobile tests:
   ```bash
   npm run test:mobile
   ```
5. Open the HTML report:
   ```bash
   npm run report:html
   ```

## Repository structure
- `config/` - framework and environment configuration
- `src/framework/` - shared base classes, logging, reporting, and utilities
- `src/web/` - page objects and web tests
- `src/api/` - API clients, request builders, and API tests
- `src/mobile/` - mobile page objects and mobile tests
- `src/data/` - database integration and test data utilities
- `reports/` - generated HTML, Allure, and JUnit reports
- `.github/workflows/` - CI pipeline definitions

## Branch strategy
- `main` - stable production-ready code
- `develop` - active integration branch
- `feature/*` - new features and enhancements
- `bugfix/*` - bug fixes
- `hotfix/*` - urgent fixes for release branches

## Artifacts
The repository generates and stores:
- HTML report in `reports/html`
- Allure report in `reports/allure`
- JUnit XML in `reports/junit`
- Test traces, screenshots, and videos in `test-results/`
- Execution logs in `logs/`

## Contribution guide
1. Create a feature or bugfix branch from `develop`.
2. Keep changes focused and documented.
3. Add or update relevant tests.
4. Run the relevant suite locally before opening a PR.
5. Ensure CI passes before merging.

## CI
The repository includes a GitHub Actions workflow for test execution, artifact upload, and report generation.

## Notes
- The web sample targets `https://practicetestautomation.com/practice-test-login/`.
- API tests use `https://dummyjson.com`.
- Mobile tests leverage Playwright device profiles for emulator-based validation.
