import { Router } from 'express';
import { createUserUseCase } from "../src/use-case/createUserAccount.js";

export const router = Router();

router.get('/', (req, res) => {
    res.send('Hello World!')
});

router.post('/accounts', function (req, res) {

    const { name, email, password } = req.body
    createUserUseCase(name, email, password)
        .then((data) => {
            console.log(data)
            let user = {
                name: data.name,
                email: data.email,
                date: data.createdDate
            }

            res.status(201).json(user);
        })
        .catch((error) => {
            res.status(400).json({ status: 'Error creating user!', message: error.message });
        })
});


