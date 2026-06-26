export class DbClient {
  private static instance: DbClient;
  private readonly databaseFile: string;

  private constructor(databaseFile: string) {
    this.databaseFile = databaseFile;
  }

  static getInstance(databaseFile = './src/data/db/test-data.db'): DbClient {
    if (!DbClient.instance) {
      DbClient.instance = new DbClient(databaseFile);
    }
    return DbClient.instance;
  }

  query<T = unknown>(_sql: string, _params: unknown[] = []): T[] {
    throw new Error(`Database support is not enabled for ${this.databaseFile}.`);
  }

  execute(_sql: string, _params: unknown[] = []): void {
    throw new Error(`Database support is not enabled for ${this.databaseFile}.`);
  }
}
