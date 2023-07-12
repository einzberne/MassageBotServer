const router = require("express").Router();

router.post("/", async (req, res) => {
  try {
    console.log(req.query);
    console.log(req.headers);
    console.log(req.params);
    res.status(200).json();
  } catch (err) { res.status(500).json(err)}
});

module.exports = router;
