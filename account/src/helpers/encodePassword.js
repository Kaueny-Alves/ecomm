import bcrypt from 'bcryptjs';

export function encodePassword(password) {
    const saltRounds = 10;
    const hash = bcrypt.hashSync(password, saltRounds);
    return hash;
}