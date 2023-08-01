const Massager = require("../models/massager");

exports.addMassager = async (req, res, next) => {
  let b = req.body;
  const massager = await Massager.findOne({ where: { uuid: b.uuid } });
  massager.firstName = b.firstName;
  massager.lastName = b.lastName;
  massager.features = b.features;
  massager.status = "complete";
  massager.isActive = true;
  await massager.save();
  res.status(200).json();
};
