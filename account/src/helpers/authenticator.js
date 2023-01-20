import jwt from "jsonwebtoken";

export function generateToken(id) {
    return jwt.sign({ id }, process.env.JWT_KEY, {
        expiresIn: process.env.JWT_EXPIRES_IN
    });

}
