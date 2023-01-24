import { findAccountByEmail } from "../repositories/accountRepository.js";
import { comparePassword } from "../helpers/encodePassword.js";
import { generateToken } from "../helpers/authenticator.js";


export async function createToken(email, password) {

    const user = await findAccountByEmail(email)
    const isPasswordCorrect = await comparePassword(password, user.password)
    if (email === user.email && isPasswordCorrect) {
        const id = user.id;
        const token = generateToken(id)
        return token
    }
    return null

}
