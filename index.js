const express = require("express");
const { Sequelize } = require('sequelize');
const sequelize = require('./util/database');
const Massager = require("./models/massager");

const app = express();
const botRoute = require("./routes/bot");
const massagerRoute = require("./routes/massager");
const cors = require('cors');

app.use(cors());

app.get("/", (req, res) => {
    res.send("Express on Vercel");
});

app.use(express.json())
app.use("/api/bot", botRoute);
app.use("/api/massager", massagerRoute);

sequelize
  // .sync({ force: true })
  .sync()
  .then(result => {
    console.log(result);
    app.listen(5000, () => {
        console.log("Running on port 5000.");
    });
  })
  .catch(err => {
    console.log(err);
  });

// Export the Express API
module.exports = app;