import { test, expect } from '../../framework/base/test-base.js';
import { ApiClient } from '../clients/api-client.js';
import { ProductClient } from '../clients/product.client.js';
import { apiConfig } from '../../test-data/credentials.js';
import { productPayloads } from '../../test-data/payloads.js';

const newProduct = productPayloads.create;

test.describe('Product API', () => {
  test('should create a new product and return created data', async ({ request }) => {
    const api = new ApiClient(request, apiConfig.baseUrl);
    const client = new ProductClient(api);

    const createResponse = await client.createProduct(newProduct);
    expect(createResponse.ok()).toBeTruthy();
    const created = await createResponse.json();
    expect(created.title).toBe(newProduct.title);
    expect(created.brand).toBe(newProduct.brand);

    const detailResponse = await client.getProductById(created.id);
    expect(detailResponse.status()).toBe(404);
    const detail = await detailResponse.json();
    expect(detail.message).toContain('not found');
  });
});
