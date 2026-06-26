# 07. Logging

## Purpose
Logging helps trace execution, diagnose failures, and maintain auditability.

## Logging Strategy
- Record key test steps and events
- Capture runtime warnings and errors
- Persist logs in the `logs/` folder
- Use structured messages for better filtering

## Suggested Improvements
- Add correlation IDs for test runs
- Add log levels such as INFO, WARN, ERROR
- Attach logs to failure artifacts in CI
