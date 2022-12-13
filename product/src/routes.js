import { Router } from 'express';
import { createProductUseCase } from "../src/use-case/createProductUseCase.js";

export const router = Router();

router.get('/', (req, res) => {
    res.send('Hello World!')
});

router.post('/products', function (req, res) {

    const product = req.body
    createProductUseCase(product)
        .then((data) => {
            res.status(201).json(data);
        })
        .catch((error) => {
            res.status(400).json({ status: 'Error creating user!', message: error.message });
        })
});


