const products = []

export async function saveProduct(product) {

    products.push(product)
    return product

}

export async function findProducts() {

    const listProducts = products
    return listProducts

}