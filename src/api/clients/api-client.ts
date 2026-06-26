import { APIRequestContext } from '@playwright/test';

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export interface ApiRequestOptions {
  method?: HttpMethod;
  path: string;
  body?: Record<string, unknown> | string | null;
  headers?: Record<string, string>;
  params?: Record<string, string | number | boolean>;
  auth?: boolean;
}

export class ApiClient {
  constructor(private readonly request: APIRequestContext, private readonly baseURL: string = 'https://dummyjson.com') {}

  private buildUrl(path: string, params?: Record<string, string | number | boolean>): string {
    const url = new URL(path, this.baseURL);
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        url.searchParams.set(key, String(value));
      });
    }
    return url.toString();
  }

  async send<T = unknown>(options: ApiRequestOptions) {
    const headers = {
      'Content-Type': 'application/json',
      ...(options.headers || {})
    };

    const requestOptions: Record<string, unknown> = {
      headers,
      data: options.body ?? undefined
    };

    if (options.auth) {
      requestOptions.headers = {
        ...requestOptions.headers,
        Authorization: `Bearer ${process.env.API_TOKEN || ''}`
      };
    }

    return this.request.fetch(this.buildUrl(options.path, options.params), {
      method: options.method || 'GET',
      ...requestOptions
    }) as Promise<import('@playwright/test').APIResponse>;
  }

  async get<T = unknown>(path: string, params?: Record<string, string | number | boolean>) {
    return this.send<T>({ method: 'GET', path, params });
  }

  async post<T = unknown>(path: string, body?: Record<string, unknown>, headers?: Record<string, string>) {
    return this.send<T>({ method: 'POST', path, body, headers });
  }

  async put<T = unknown>(path: string, body?: Record<string, unknown>, headers?: Record<string, string>) {
    return this.send<T>({ method: 'PUT', path, body, headers });
  }

  async patch<T = unknown>(path: string, body?: Record<string, unknown>, headers?: Record<string, string>) {
    return this.send<T>({ method: 'PATCH', path, body, headers });
  }

  async delete<T = unknown>(path: string) {
    return this.send<T>({ method: 'DELETE', path });
  }
}
