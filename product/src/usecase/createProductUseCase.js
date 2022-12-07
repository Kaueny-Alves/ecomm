import { randomUUID } from 'crypto';
import {  saveProduct } from '../repositories/productRepository.js';

export async function createProductUseCase(product) {
    const createdDate = new Date().toISOString().substring(0, 10);
    const id = randomUUID();

    const createProduct = product
    createProduct.productId = id;
    createProduct.createdDate = createdDate

    await saveProduct(createProduct)
    return createProduct;
}

