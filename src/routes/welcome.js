const router = require("express").Router();

router.get('/', (req, res) => {
    res.sendFile('./files/index.html');
});

module.exports = router;
