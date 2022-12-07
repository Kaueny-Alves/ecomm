const products = []

export async function saveProduct(product) {

    products.push(product)
    return products

}

export async function findProducts() {

    const listProducts = products.map(product => product)
    return listProducts

}