const router = require("express").Router();
const healthRouter = require('./health');
const notificationRouter = require('./notification');

router.use('/', healthRouter);
router.use('/notification', notificationRouter);

module.exports = router;