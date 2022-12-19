import { findProducts } from "../repositories/productRepository.js";

export async function listProducts() {

    const products = await findProducts();

    return products;

}

