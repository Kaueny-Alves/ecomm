import { Router } from 'express';
import { createUserUseCase } from "../src/use-case/createUserAccount.js";
import { generateToken } from './helpers/authenticator.js';
import { comparePassword } from './helpers/encodePassword.js';
import { findAccountByEmail, listAccounts } from './repositories/accountRepository.js';


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
            res.status(400).json({ status: 'Error creating user!', message: error.message });
        })

});

router.post('/accounts/login', async (req, res) => {

    try {

        const { email, password } = req.body
        const user = await findAccountByEmail(email)
            .then()
            .catch((e) => {
                console.error(e.message.stack)
            })

        const isPasswordCorrect = await comparePassword(password, user.password)

        if (email == user.email || password == isPasswordCorrect) {
            const id = user.id;
            const token = generateToken(id)
            return res.status(200).json({ auth: true, token: token });
        }

    } catch (e) {
        res.status(400).json({ message: e.message });
    }
})

router.get('/accounts', async (req, res) => {

    listAccounts().then((data) => {
        return res.status(200).json({
            id: data.id,
            name: data.name,
            email: data.email,
        });
    }).catch((e) => {
        res.status(400).json({ message: e.message });
    })

})


export { router };
