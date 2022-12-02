
import { saveAccount, findAccountByEmail } from '../repositories/accountRepository.js';

export async function createUserUseCase(name, email, password) {

    const accountAlreadyExists = await findAccountByEmail(email);
    const createdDate = new Date().toISOString().substring(0, 10);
    const user = {
        name,
        email,
        password,
        createdDate
    }

    if (accountAlreadyExists !== null) {
        console.error('Account already exists', email);
        return;
    }

    saveAccount(user);

    return user
}


