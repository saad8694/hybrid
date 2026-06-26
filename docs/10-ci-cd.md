# 10. CI/CD

## Purpose
Automate test execution and report generation in a repeatable, reviewable pipeline.

## Current CI Plan
- Install dependencies
- Install Playwright browsers
- Run web, API, and mobile suites
- Generate Allure report
- Upload artifacts

## Best Practices
- Run smoke tests on pull requests
- Run full regression suites on main branch
- Publish reports for every run
- Cache dependencies and browser binaries where possible
