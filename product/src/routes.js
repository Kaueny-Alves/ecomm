import { Router } from 'express';
import { createProductUseCase } from "../src/use-case/createProductUseCase.js";
import { tokenValidated } from './middleware/authenticator.js';
import * as jwt from "jsonwebtoken";
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

     const payload = tokenValidated(req, res)
   
     if (!payload) return res.status(401).send('Access denied. No token provided.')

    const id = payload.id

    const product = req.body
    createProductUseCase(product, id)
        .then((data) => {
            res.status(201).json(data);
        })
        .catch((error) => {
            res.status(400).json({ status: 'Error fetching products!', message: error.message });
        })
});


