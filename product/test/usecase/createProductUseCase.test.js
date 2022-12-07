import { createProductUseCase } from "../../src/usecase/createProductUseCase.js";
import { produto } from "./products.js";


const product = await createProductUseCase(produto);
console.log("product: ", product)