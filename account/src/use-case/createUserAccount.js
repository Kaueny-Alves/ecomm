import { randomUUID } from 'crypto';
import { saveAccount } from '../repositories/accountRepository.js';
import { encodePassword } from '../helpers/encodePassword.js'

export async function createUserUseCase(name, email, password) {

    // const accountAlreadyExists = await findAccountByEmail(email);

    // if (accountAlreadyExists !== null) {
    //     console.error('Account already exists', email);
    //     return;
    // }

    const id = randomUUID();
    const createdDate = new Date().toISOString().substring(0, 10);
    const user = {
        id,
        createdDate,
        name,
        email,
        password: encodePassword(password),
    }

    saveAccount(user);

    return user
}


