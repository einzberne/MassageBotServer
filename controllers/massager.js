const { 
  v1: uuidv1,
  v4: uuidv4,
} = require('uuid');
const Massager = require("../models/massager");

exports.addMassager = async (req, res, next) => {
  let b = req.body;
  const massager = await Massager.findOne({ where: { uuid: b.uuid } });
  massager.firstName = b.firstName;
  massager.lastName = b.lastName;
  massager.features = b.features;
  massager.isActive = true; +
  await massager.save();
};
