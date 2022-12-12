import { listProducts } from "../../src/usecase/listProducts.js"
import { createProductUseCase } from "../../src/usecase/createProductUseCase.js";
import { produto } from "./products.js";



const productsList = await listProducts();
console.log("array vazio: ", productsList);


await createProductUseCase(produto);
console.log("lista de produtos: ", productsList);