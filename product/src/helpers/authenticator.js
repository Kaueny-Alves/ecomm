import jwt from "jsonwebtoken";

export function tokenValidated(token) {

    try {
        const payload = jwt.verify(token, process.env.JWT_KEY);

        return payload
    } catch (error) {
        console.log('error when verifying token', error.message);
        return {};
    }


}

export function generateToken(id) {
    const tokenSecret = process.env.JWT_KEY;
    const tokenExpires = process.env.TOKEN_EXPIRATION;
    const token = jwt.sign({ id }, tokenSecret, { expiresIn: `${tokenExpires}s` });
    return token

}