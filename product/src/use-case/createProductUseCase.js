import { randomUUID } from 'crypto';
import { saveProduct } from '../repositories/productRepository.js';

export async function createProductUseCase(product) {
    const id = randomUUID();
    const createdDate = new Date().toISOString().substring(0, 10);
    const createProduct = { id, createdDate, ...product }

    await saveProduct(createProduct)
    return createProduct;
}

