# 08. Database

## Purpose
The database layer supports test data setup, data validation, and environment-backed assertions.

## Current Integration
- PostgreSQL support added using the `pg` package
- Reusable connection management implemented through a shared client
- Query helpers provided for standard CRUD operations

## Recommended Usage
Use database helpers for setup, cleanup, and validation steps in tests that depend on persisted data.
