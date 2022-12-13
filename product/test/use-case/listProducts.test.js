import { listProducts } from "../../src/use-case/listProducts.js"
import { createProductUseCase } from "../../src/use-case/createProductUseCase.js";
import { produto } from "./products.js";



const productsList = await listProducts();
console.log("array vazio: ", productsList);


await createProductUseCase(produto);
console.log("lista de produtos: ", productsList);