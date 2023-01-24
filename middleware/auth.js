const authorize = (req, res, next) => {
    if (!req.headers.authorization) return res.status(401).send("Access denied. No token provided.");
    if (req.headers.authorization !== process.env.SLIIT_EATS_SERVER_AUTH) return res.status(401).send("Access denied. Invalid token.");
    next();
}

const authorizeV2 = (req, res, next) => {
    if (req.headers.authorizationv2 !== process.env.SLIIT_EATS_SERVER_AUTH_TOKEN_2) return res.status(401).send("Access denied. Invalid token.");
    next();
}

module.exports = {
    authorize,
    authorizeV2
}