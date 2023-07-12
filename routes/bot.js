const router = require("express").Router();
const logger = require("../winstonLog");

router.post("/", async (req, res) => {
    logger.info(req.query);
    logger.info(req.headers);
    logger.info(req.params);
    console.log(req.query)
    console.log(req.headers)
    console.log(req.params)
    res.status(200).json();
});

module.exports = router;