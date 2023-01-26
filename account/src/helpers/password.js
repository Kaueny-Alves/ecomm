import bcrypt from 'bcryptjs';

export function encodePassword(password) {
    const salt = parseInt(process.env.SALT);
    const hash = bcrypt.hashSync(password, salt);
    return hash;
}

export function comparePassword(password, hashPassword) {
    const hash = bcrypt.compare(password, hashPassword);
    return hash;
}