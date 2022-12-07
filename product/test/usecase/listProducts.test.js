import { listProducts } from "../../src/usecase/listProducts.js"
import { createProductUseCase } from "../../src/usecase/createProductUseCase.js";



const productsList = await listProducts();
console.log("array vazio: ", productsList);


const coca =
{
    nome: "coca",
    valor: 2,
    quantidade: 1,
    descricao: "refrigerante lata",
    categoria: "bebidas",
    caracteristicas: [
        {
            nome: "refrigerante",
            descricao: " bebidas",
        }
    ],
    imagens: [
        {
            url: "https://pixabay.com/pt/photos/posso-lata-de-cola-cola-bebida-592366/",
            descricao: "refrigerante de lata",
        }
    ],
}
const coca1 =
{
    nome: "coca",
    valor: 2,
    quantidade: 1,
    descricao: "refrigerante lata",
    categoria: "bebidas",
    caracteristicas: [
        {
            nome: "refrigerante",
            descricao: " bebidas",
        }
    ],
    imagens: [
        {
            url: "https://pixabay.com/pt/photos/posso-lata-de-cola-cola-bebida-592366/",
            descricao: "refrigerante de lata",
        }
    ],
}
const coca2 =
{
    nome: "coca",
    valor: 2,
    quantidade: 1,
    descricao: "refrigerante lata",
    categoria: "bebidas",
    caracteristicas: [
        {
            nome: "refrigerante",
            descricao: " bebidas",
        }
    ],
    imagens: [
        {
            url: "https://pixabay.com/pt/photos/posso-lata-de-cola-cola-bebida-592366/",
            descricao: "refrigerante de lata",
        }
    ],
}

await createProductUseCase(coca);
await createProductUseCase(coca1);
await createProductUseCase(coca2);


console.log("lista de produtos: ", productsList);