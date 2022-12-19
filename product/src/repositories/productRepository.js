const products = []

export async function saveProduct(product) {

    products.push(product)
}

export async function findProducts() {

    return products
}