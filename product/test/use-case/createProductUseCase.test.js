import { createProductUseCase } from "../../src/use-case/createProductUseCase.js";
import { produto } from "../data/products.js";

const product = await createProductUseCase(produto);
console.log("product: ", product)