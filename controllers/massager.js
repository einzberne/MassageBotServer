const { 
  v1: uuidv1,
  v4: uuidv4,
} = require('uuid');
const Massager = require("../models/massager");

exports.addMassager = (req, res, next) => {
  let b = req.body;
  Massager.create({
    userId: uuidv4(),
    firstName: b.firstName,
    lastName: b.lastName,
    isActive: true,
    features: b.features,
  })
    .then((result) => {
      console.log(result);
      res.status(200).json(b.userId);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
};
