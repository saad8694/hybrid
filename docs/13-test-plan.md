# 13. Test Plan

## Scope
- Web smoke and regression coverage
- API CRUD and auth flows
- Mobile web validation using Playwright device profiles
- Database-backed data checks

## Execution Strategy
- Local execution during development
- CI execution for pull requests and main branch merges
- Parallel execution where possible

## Reporting and Maintenance
- Use HTML and Allure reports for result analysis
- Maintain page objects and shared utilities as the UI evolves
- Keep test data isolated and environment-aware
