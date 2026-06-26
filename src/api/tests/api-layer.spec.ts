import { expect, test } from '../../framework/base/test-base.js';
import { ApiClient } from '../clients/api-client.js';
import { AuthClient } from '../clients/auth.client.js';
import { ProductClient } from '../clients/product.client.js';
import { RequestBuilder } from '../utils/request-builder.js';
import { apiCredentials, apiConfig } from '../../test-data/credentials.js';
import { productPayloads } from '../../test-data/payloads.js';

test.describe('Reusable API layer', () => {
  test('should authenticate, create, update, and delete product data', async ({ request }) => {
    const api = new ApiClient(request, apiConfig.baseUrl);
    const authClient = new AuthClient(api);
    const productClient = new ProductClient(api);

    const loginResponse = await authClient.login(apiCredentials.username, apiCredentials.password, apiCredentials.expiresInMins);
    expect(loginResponse.ok()).toBeTruthy();

    const productPayload = productPayloads.apiLayer;

    const createResponse = await productClient.createProduct(productPayload);
    expect(createResponse.ok()).toBeTruthy();
    const created = await createResponse.json();
    expect(created.title).toBe(productPayload.title);

    const updateResponse = await productClient.updateProduct(created.id, productPayloads.update);
    expect(updateResponse.status()).toBe(404);

    const updated = await updateResponse.json();
    expect(updated.message).toContain('not found');

    const deleteResponse = await productClient.deleteProduct(created.id);
    expect(deleteResponse.status()).toBe(404);

    const headers = RequestBuilder.buildHeaders({ Authorization: 'Bearer demo' });
    expect(headers['Content-Type']).toBe('application/json');
  });
});
