import { createProductUseCase } from "../../src/usecase/createProductUseCase.js";

const produto = 
        {
            nome: "coca",
            valor: 2,
            quantidade: 1,
            descricao: "refrigerante lata",
            categoria: "bebidas",
            caracteristicas: [
                {
                    nome:"refrigerante",
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

const product = await createProductUseCase(produto);
console.log("product: " , product)