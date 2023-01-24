const router = require("express").Router();
const { authorize, authorizeV2 } = require("../middleware/auth");

router.get('/', (_req, res) => {
    res.sendFile('./files/index.html');
});

router.get('/find-me', authorize, (_req, res) => {
    res.send(process.env.CTF_SERVER_FLAG);
});

router.get('/find-me-as-well', authorizeV2, (_req, res) => {
    res.send(process.env.CTF_SERVER_FLAG_2);
});

module.exports = router;