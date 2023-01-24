module.exports = (req, res, next) => {
    if (!req.headers.authorization) return res.status(401).send("Access denied. No token provided.");
    if (req.headers.authorization !== process.env.SLIIT_EATS_SERVER_AUTHORIZATION_KEY) return res.status(401).send("Access denied. Invalid token.");
    next();
}