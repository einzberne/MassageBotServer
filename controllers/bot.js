exports.bot = (req, res, next) => {

  if (req.body.events[0].type === "message") {
    if (req.body.events[0].message.text === "Register") {
      // addMassager(req.body.events[0].source);
    }
  }
  res.status(200).json();
};
