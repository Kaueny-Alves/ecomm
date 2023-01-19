import jwt from "jsonwebtoken";

export function generateToken(id) {
    return jwt.sign(id, process.env.JWT_KEY);
}

export function tokenValidated(req, res) {

    const token = req.headers.autorization?.split('') || [' ', ' '];

    if (!token) return res.status(401).send('Access denied. No token provided.')

    const payload = jwt.verify(token, process.env.JWT_KEY);
    return payload
}