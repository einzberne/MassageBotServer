const express = require("express");
const app = express();
const botRoute = require("./routes/bot");
app.get("/", (req, res) => {
    res.send("Express on Vercel");
});

app.listen(5000, () => {
    console.log("Running on port 5000.");
});

app.use(express.json())
app.use("/api/bot", botRoute);
// Export the Express API
module.exports = app;