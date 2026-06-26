# 09. API Layer

## Purpose
Provide a reusable layer for authentication and CRUD operations against REST APIs.

## Current Capabilities
- Shared API client
- Authentication helper
- Product CRUD operations
- Request builder for headers and JSON payloads

## Design Approach
Create feature-specific clients on top of a central request layer so tests stay readable and maintainable.
