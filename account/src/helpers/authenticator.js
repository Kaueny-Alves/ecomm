import jwt from "jsonwebtoken";

export function generateToken(id) {
    const tokenSecret = process.env.JWT_KEY;
    const tokenExpires = parseInt(process.env.TOKEN_EXPIRATION);
    const token = jwt.sign({ id }, tokenSecret, { expiresIn: `${tokenExpires}s` });

    return token
}

