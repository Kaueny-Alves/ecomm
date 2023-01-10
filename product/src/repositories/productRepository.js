import { Product } from '../models/product.js';
import { client } from './clientDatabase.js';




export const Connection = async () => {
    try {
        await client.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error.message);
    }
}

export async function saveProduct(product) {

    const createdProduct = await Product.create(product);
    await createdProduct.save();
    return createdProduct;
}

export async function findProducts() {
    const allProducts = await Product.findAll();
    return allProducts
}