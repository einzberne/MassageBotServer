const router = require("express").Router();
const massagerController = require('../controllers/massager');

router.post('/', massagerController.addMassager);

module.exports = router;