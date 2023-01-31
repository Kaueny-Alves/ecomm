import jwt from "jsonwebtoken";

export function tokenValidated(req, res) {

    try {
        const token = req.headers.authorization.split(' ')[1];
        if (!token) return res.status(401).send('Access denied. No token provided.')

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