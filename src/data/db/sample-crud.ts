import { PostgresClient } from './postgres-client.js';

export interface UserRecord {
  id?: number;
  name: string;
  email: string;
  role: string;
}

export const UserQueries = {
  async createUser(user: UserRecord): Promise<UserRecord> {
    const client = PostgresClient.getInstance();
    const result = await client.query<UserRecord>(
      'INSERT INTO users(name, email, role) VALUES($1, $2, $3) RETURNING id, name, email, role',
      [user.name, user.email, user.role]
    );
    return result.rows[0];
  },

  async getUserById(id: number): Promise<UserRecord | null> {
    const client = PostgresClient.getInstance();
    const result = await client.query<UserRecord>(
      'SELECT id, name, email, role FROM users WHERE id = $1',
      [id]
    );
    return result.rows[0] ?? null;
  },

  async updateUserEmail(id: number, email: string): Promise<UserRecord | null> {
    const client = PostgresClient.getInstance();
    const result = await client.query<UserRecord>(
      'UPDATE users SET email = $1 WHERE id = $2 RETURNING id, name, email, role',
      [email, id]
    );
    return result.rows[0] ?? null;
  },

  async deleteUser(id: number): Promise<void> {
    const client = PostgresClient.getInstance();
    await client.query('DELETE FROM users WHERE id = $1', [id]);
  }
};
