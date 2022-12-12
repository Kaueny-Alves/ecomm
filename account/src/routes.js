import { Router } from 'express';
import { createUserUseCase } from "../src/use-case/createUserAccount.js";

export const router = Router();

router.get('/', (req, res) => {
    res.send('Hello World!')
});

router.post('/accounts', async function (req, res) {


    try {
        const { nameUser, email, password } = req.body
        const account = await createUserUseCase(nameUser, email, password);

        if (!account) {
            res.status(400).send('Something broke when creating account!');
            return 
        }

        const user = {
            name: account.name,
            email: account.email,
            date: account.createdDate
        }

        res.status(201).json(user);

    } catch (e) {
        console.error("Error when creating account: ", e.message.stack);
    }

});


