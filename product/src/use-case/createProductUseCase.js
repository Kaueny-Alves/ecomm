import { saveProduct } from '../repositories/productRepository.js';

export async function createProductUseCase(product, id) {
    const id_user = id;
    const createProduct = { id_user, ...product }

    const products = await saveProduct(createProduct)
    return products;
}

