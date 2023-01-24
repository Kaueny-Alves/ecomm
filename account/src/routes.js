import { Router } from 'express';
import { createUserUseCase } from "../src/use-case/createUserAccount.js";
import { createToken } from './use-case/createTokenUseCase.js';

const router = Router();

router.post('/accounts/register', async function (req, res) {

    const { name, email, password } = req.body

    await createUserUseCase(name, email, password)
        .then((data) => {

            res.status(201).json({
                id: data.id,
                name: data.name,
                email: data.email,
                createdDate: data.createdDate
            });

        })
        .catch((error) => {

            res.status(500)
                .json({
                    status: 'Error creating user!',
                    message: error.message
                });
        })

});

router.post('/accounts/login', async (req, res) => {

    const { email, password } = req.body

    try {
        const token = await createToken(email, password)

        if (token === null) {
            res.status(401).json({ auth: false, message: "email ou senha incorretos!" });
        } else {
            res.status(201).json({ auth: true, token: token });
        }
    } catch (error) {
        res.status(400).json({ auth: false, message: "email ou senha incorretos!" });
    }
})

export { router };
