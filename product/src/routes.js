import { Router } from 'express';
import { createProductUseCase } from "../src/use-case/createProductUseCase.js";
import { listProducts } from './use-case/listProducts.js';

export const router = Router();

router.get('/products', (req, res) => {
    listProducts()
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((error) => {
            res.status(400).json({ status: 'Error getting product!', message: error.message });
        })
});

router.post('/products', function (req, res) {

    const product = req.body
    createProductUseCase(product)
        .then((data) => {
            res.status(201).json(data);
        })
        .catch((error) => {
            res.status(400).json({ status: 'Error fetching products!', message: error.message });
        })
});


