const router = require("express").Router();

router.post("/", async (req, res) => {
    console.log(req.body)
    console.log(req.headers)
    console.log(req.params)
    res.status(200).json();
});

module.exports = router;