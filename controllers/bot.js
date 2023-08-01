const Massager = require("../models/massager");
const { v4: uuidv4 } = require('uuid');

exports.bot = (req, res, next) => {
  if (req.body.events[0].type === "message") {
    if (req.body.events[0].message.text === "Register") {
      addTempMassager(req.body.events[0].source.userId);
    }
  }
  res.status(200).json();
};

const addTempMassager = async (userId) => {
  Massager.create({
    userId: userId,
    uuid: uuidv4(),
    status: "waiting"
  })
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
}
