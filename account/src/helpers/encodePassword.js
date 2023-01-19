import bcrypt from 'bcryptjs';

export function encodedPassword(password) {
    const salt = 12;
    const hash = bcrypt.hashSync(password, salt);
    return hash;
}

export function comparePassword(password, hashPassword) {
    const hash = bcrypt.compare(password, hashPassword);
    return hash;
}