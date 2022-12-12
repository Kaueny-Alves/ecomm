import { Router } from 'express';
import { createUserUseCase } from "../src/use-case/createUserAccount.js";

export const router = Router();

router.get('/', (req, res) => {
    res.send('Hello World!')
});

router.post('/accounts', async function (req, res) {
    const nameUser = req.body.nameUser
    const email = req.body.email
    const password = req.body.password
    const account = await createUserUseCase(nameUser, email, password);

    res.status(201).json(account);
});


