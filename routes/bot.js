const router = require("express").Router();
const logger = require("../utils/winstonLog");

router.post("/", async (req, res) => {
  try {
    logger.info(req.query);
    logger.info(req.headers);
    logger.info(req.params);
    console.log(req.query);
    console.log(req.headers);
    console.log(req.params);
    res.status(200).json();
  } catch (err) { res.status(500).json(err)}
});

module.exports = router;
