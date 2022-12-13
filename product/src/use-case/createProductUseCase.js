import { randomUUID } from 'crypto';
import {  saveProduct } from '../repositories/productRepository.js';

export async function createProductUseCase(product) {
   
    const createProduct = product
    createProduct.productId = randomUUID();
    createProduct.createdDate = new Date().toISOString().substring(0, 10);

    await saveProduct(createProduct)
    return createProduct;
}

