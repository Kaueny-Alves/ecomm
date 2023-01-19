import { Router } from 'express';
import { createUserUseCase } from "../src/use-case/createUserAccount.js";
import { generateToken } from './helpers/authenticator.js';
import { comparePassword } from './helpers/encodePassword.js';
import { findAccountByEmail, listAccounts } from './repositories/accountRepository.js';


const router = Router();

router.post('/accounts', async function (req, res) {

    const { name, email, password } = req.body

    createUserUseCase(name, email, password)
        .then((data) => {

            res.status(201).json({
                id: data.id,
                name: data.name,
                email: data.email,
                createdDate: data.createdDate
            });

        })
        .catch((error) => {

            res.status(400)
                .json({
                    status: 'Error creating user!',
                    message: error.message
                });
        })

});

router.get('/accounts', async (req, res) => {

    listAccounts().then((data) => {
        return res.status(200).json(data);
    }).catch((e) => {
        console.error(e.message.stack)
    })

})

router.post('/accounts/login', async (req, res) => {

    const { email, password } = req.body
    const user = await findAccountByEmail(email).catch((e) => {
        console.error(e.message.stack)
    })

    const isPasswordCorrect = await comparePassword(password, user.password)

    console.log(isPasswordCorrect)

    if (!isPasswordCorrect) {
        const id = user.id;
        const token = generateToken(id)
        return res.json({ auth: true, token: token });
    }

})
export { router };
