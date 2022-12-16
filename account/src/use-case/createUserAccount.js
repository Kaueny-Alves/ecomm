import bcrypt from 'bcryptjs';
import { randomUUID } from 'crypto';
import { saveAccount, findAccountByEmail } from '../repositories/accountRepository.js';

function encode(password) {
    const saltRounds = 10;
    const hash = bcrypt.hashSync(password, saltRounds);
    return hash;
}


export async function createUserUseCase(name, email, password) {

    const accountAlreadyExists = await findAccountByEmail(email);

    if (accountAlreadyExists !== null) {
        console.error('Account already exists', email);
        return;
    }

    const id = randomUUID();
    const createdDate = new Date().toISOString().substring(0, 10);
    const encodedPassword = encode(password)

    const user = {
        id,
        createdDate,
        name,
        email,
        encodedPassword,
    }

    saveAccount(user);

    return user
}


