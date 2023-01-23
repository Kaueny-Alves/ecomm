import { Router } from 'express';
import { createUserUseCase } from "../src/use-case/createUserAccount.js";
import { generateToken } from './helpers/authenticator.js';
import { comparePassword } from './helpers/encodePassword.js';
import { findAccountByEmail } from './repositories/accountRepository.js';


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

    await findAccountByEmail(email)
        .then(async (user) => {
            const isPasswordCorrect = await comparePassword(password, user.password)

            if (email !== user.email || isPasswordCorrect === false) {
                return res.status(400).json({ auth: false, message: "email ou senha incorretos!" });
            } else {
                const id = user.id;
                const token = generateToken(id)
                return res.status(201).json({ auth: true, token: token });
            }

        })
        .catch(() => {
            res.status(400).json({ auth: false, message: "email ou senha incorretos!" });

        })

})

export { router };
