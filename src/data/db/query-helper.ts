import type { QueryResult } from 'pg';
import { PostgresClient } from './postgres-client.js';

export async function executeQuery<T = unknown>(sql: string, params: unknown[] = []): Promise<T[]> {
  const client = PostgresClient.getInstance();
  const result: QueryResult<T> = await client.query<T>(sql, params);
  return result.rows;
}

export async function executeSingle<T = unknown>(sql: string, params: unknown[] = []): Promise<T | null> {
  const rows = await executeQuery<T>(sql, params);
  return rows.length > 0 ? rows[0] : null;
}
