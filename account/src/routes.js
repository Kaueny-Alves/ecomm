import { Router } from 'express';
import { createUserUseCase } from "../src/use-case/createUserAccount.js";
import { createToken } from './use-case/createTokenUseCase.js';


const router = Router();

router.post('/accounts/register', async function (req, res, next) {

    const { name, email, password } = req.body
    const { hasError, errors, account } = await createUserUseCase(name, email, password);

    if(hasError) {
        return res.status(400).json(errors);
    }
    
    return res.status(201).json(account);

});

router.post('/accounts/login', async (req, res) => {

    const { email, password } = req.body
    

    try {
        const token = await createToken(email, password)
        if (token === null) {

            res.status(400).json({ auth: false, message: "email ou senha incorretos!" });
        } else {
            res.status(201).json({ auth: true, token: token });
        }
    } catch (error) {
        res.status(400).json({ auth: false, message: "email ou senha incorretos!" });
    }
})

export { router };
