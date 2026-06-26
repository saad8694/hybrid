import { Pool, PoolClient, QueryResult } from 'pg';
import { dbConfig } from '../../../config/db.config.js';

export class PostgresClient {
  private static instance: PostgresClient;
  private readonly pool: Pool;

  private constructor() {
    this.pool = new Pool(dbConfig);
  }

  static getInstance(): PostgresClient {
    if (!PostgresClient.instance) {
      PostgresClient.instance = new PostgresClient();
    }
    return PostgresClient.instance;
  }

  async getClient(): Promise<PoolClient> {
    return this.pool.connect();
  }

  async query<T = unknown>(text: string, params: unknown[] = []): Promise<QueryResult<T>> {
    return this.pool.query<T>(text, params);
  }

  async transaction<T>(callback: (client: PoolClient) => Promise<T>): Promise<T> {
    const client = await this.getClient();
    try {
      await client.query('BEGIN');
      const result = await callback(client);
      await client.query('COMMIT');
      return result;
    } catch (error) {
      await client.query('ROLLBACK');
      throw error;
    } finally {
      client.release();
    }
  }

  async close(): Promise<void> {
    await this.pool.end();
  }
}
