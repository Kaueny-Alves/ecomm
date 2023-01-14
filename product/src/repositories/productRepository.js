import { Product } from '../models/product.js';
import { ProductFeature } from '../models/product_feature.js';
import { ProductImage } from '../models/product_image.js';

export async function saveProduct(product) {
    try {
        const createdProduct = await Product.create(product, {
            include: [
                { association: Product.ProductFeature, as: 'features', },
                { association: Product.ProductImage, as: 'images' }
            ]

        });
        await createdProduct.save();
        return createdProduct;

    } catch (e) {
        console.error("error creating product =======", e.message.stack);
    } 
}

export async function findProducts() {
    try {
        const allProducts = await Product.findAll({
            include: [
                {
                    model: ProductFeature,
                    as: 'features'
                }, {
                    model: ProductImage,
                    as: 'images'
                }]
        });
        return allProducts
    } catch (e) {
        console.error("error fetching product =======", e.message.stack);
    }
}