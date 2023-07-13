const router = require("express").Router();
// const logger = require("./winstonLog");

router.post("/", async (req, res) => {
  try {
    console.log(req.query);
    console.log(req.headers);
    console.log(req.body);
    console.log(req.body.events[0].source);
    console.log(req.body.events[0].message);
    console.log(req.body.events[0].deliveryContext);
    res.status(200).json();
  } catch (err) { res.status(500).json(err)}
});

module.exports = router;
