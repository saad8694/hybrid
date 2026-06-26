import { ApiClient } from './api-client.js';

export class ProductClient {
  constructor(private readonly api: ApiClient) {}

  async createProduct(product: Record<string, unknown>) {
    return this.api.post('/products/add', product);
  }

  async getProducts() {
    return this.api.get('/products');
  }

  async getProductById(id: number) {
    return this.api.get(`/products/${id}`);
  }

  async updateProduct(id: number, body: Record<string, unknown>) {
    return this.api.put(`/products/${id}`, body);
  }

  async deleteProduct(id: number) {
    return this.api.delete(`/products/${id}`);
  }
}
