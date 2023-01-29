import { findProducts } from "../repositories/productRepository";


export async function cleanProductTable() {
    const products = await findProducts();
    for await (const product of products) {
        const productFeaturesDeletion = product.features.map(feature => feature.destroy())
        const productImagesDeletion = product.features.map(image => image.destroy())

        await Promise.all([...productFeaturesDeletion, productImagesDeletion])
        await product.destroy()
    }

}