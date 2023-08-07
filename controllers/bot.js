const Massager = require("../models/massager");
const axios = require('axios');
const { v4: uuidv4 } = require('uuid');


exports.bot = async (req, res, next) => {
  if (req.body.events[0].type === "message") {
    if (req.body.events[0].message.text === "Register") {
      const userId = req.body.events[0].source.userId;
      const massager = await Massager.findOne({ where: { userId: userId } });
      if(!massager) {
        const uuid = await addTempMassager(userId);
        sendRegisLink(userId, uuid)
      } else {
        sendRegisLink(massager.userId, massager.uuid)
      }
    }
  }
  res.status(200).json();
};

const addTempMassager = async (userId) => {
  const uuid = uuidv4();
  Massager.create({
    userId: userId,
    uuid: uuid,
    status: "waiting"
  })
    .then((result) => {
      console.log(result);
      return uuid;
    })
    .catch((err) => {
      console.log(err);
    });
}

const sendRegisLink = async (userId, uuid) => {
  axios.post(`${process.env.LINE_URL}/message/push`, {
    "to": userId,
    "messages":[
        {
            "type":"text",
            "text":`Please click this link to complete registeration ${process.env.ADMINWEB_URL}?id="${uuid}"`
        }
    ]
})
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}
