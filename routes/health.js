const router = require("express").Router();

router.get("/", (req, res) => {
    res.status(200).json({ 
        message: "FCM server up and running",
        info: {
            operational_status: "flag{fcm_is_awesome}"
        }
     });
});

module.exports = router;
