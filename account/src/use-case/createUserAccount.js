import joi from 'joi';
import { randomUUID } from 'crypto';
import { existsByEmail,  saveAccount } from '../repositories/accountRepository.js';
import { encodePassword } from '../helpers/password.js'

const accountValidator = joi.object({
    email: joi.string().email(),
    password: joi.string().trim().min(8),
})

export async function createUserUseCase(name, email, password) {

    const { error } = accountValidator.validate({ email, password }, { abortEarly: false });

    if (error) {
        return {
            hasError: true,
            errors: error.details.map(error => ({
                message: error.message,
                property: error.path.at(0),
            })),
            account: {}
        }
    }

    const accountAlreadyExists = await existsByEmail(email);

    if (accountAlreadyExists) {
        return {
            hasError: true,
            errors: [
                {
                    property: 'email',
                    message: 'email already used'
                }
            ],
            account: {}
        }
    }

    const id = randomUUID();
    const hashedPassword = encodePassword(password)
    const createdDate = new Date().toISOString().substring(0, 10);
    const user = {
        id,
        createdDate,
        name,
        email,
        password: hashedPassword,
    }

    await saveAccount(user);

    return {
        hasError: false,
        errors: undefined,
        account: {...user, password: undefined, _id: undefined}
    };
}

