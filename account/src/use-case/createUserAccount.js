import { randomUUID } from 'crypto';
import { saveAccount, findAccountByEmail } from '../repositories/accountRepository.js';
import { encode } from '../functions/encode.js'

export async function createUserUseCase(name, email, passWord) {

    const accountAlreadyExists = await findAccountByEmail(email);

    if (accountAlreadyExists !== null) {
        console.error('Account already exists', email);
        return;
    }

    const id = randomUUID();
    const createdDate = new Date().toISOString().substring(0, 10);
    const password = encode(passWord)

    const user = {
        id,
        createdDate,
        name,
        email,
        password,
    }

    saveAccount(user);

    return user
}


