import * as jwt from "jsonwebtoken";

export function tokenValidated(req, res) {

    const token = req.headers.authorization;
    if (!token) return res.status(401).send('Access denied. No token provided.')

    const payload = jwt.verify(token, process.env.JWT_KEY);

    return payload
}