# 12. Framework Guide

## How to Use the Framework
1. Install dependencies with `npm install`.
2. Install Playwright browsers with `npm run install:drivers`.
3. Run web tests with `npm run test:web`.
4. Run API tests with `npm run test:api`.
5. Run mobile tests with `npm run test:mobile`.
6. Open the HTML report with `npm run report:html`.

## Structure Notes
- Use page objects for UI flows.
- Use API clients for service-level validation.
- Keep database operations in dedicated utilities.
- Reuse shared reporting and logging helpers.
