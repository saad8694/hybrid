export class RequestBuilder {
  static buildJsonBody(payload: Record<string, unknown>) {
    return JSON.stringify(payload);
  }

  static buildHeaders(extra: Record<string, string> = {}) {
    return {
      'Content-Type': 'application/json',
      ...extra
    };
  }
}
