const express = require("express");
const app = express();
const botRoute = require("./routes/bot");
const logger = require("./winstonLog");

app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

app.post("/bot", (req, res) => {
  console.log(req.query);
  console.log(req.rawHeaders);
  console.log(req.params);
  return res.status(200);
});

app.listen(5000, () => {
  console.log("Running on port 5000.");
});

app.use("/api/bot", botRoute);
// Export the Express API
module.exports = app;
