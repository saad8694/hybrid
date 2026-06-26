import { ApiClient } from './api-client.js';

export class AuthClient {
  constructor(private readonly api: ApiClient) {}

  async login(username: string, password: string, expiresInMins = 30) {
    return this.api.post('/auth/login', {
      username,
      password,
      expiresInMins
    });
  }
}
