import { Router } from 'express';
import { createUserUseCase } from "../src/use-case/createUserAccount.js";
import bcrypt from 'bcryptjs';

const router = Router();

function encodePass(password) {
    const saltRounds = 10;
    const hash = bcrypt.hashSync(password, saltRounds);
    return hash;
}

router.get('/', (req, res) => {
    res.send('Hello World!')
});

router.post('/accounts', function (req, res) {

    const { name, email, password } = req.body

    const pass = encodePass(password)
   
    createUserUseCase(name, email, pass)
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

// async function decodePass(password, hash) {
//     const decoded = await bcrypt.compare(password, hash);
//     return decoded;
// }

export { router };
