const express = require("express");
const app = express();
const PORT = process.env.PORT || 8800
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const multer = require("multer")
const path = require("path");

const { json } = require("express/lib/response");
const cors = require('cors')

app.use(cors());

dotenv.config();

app.get("/", (req, res) => {
    console.log(req.query)
    console.log(req.rawHeaders)
    console.log(req.params)
    res.status(200).json('app work')
})

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
})

app.listen(PORT, () => {
    console.log(`Backend Serer is running. ${PORT}`)
})

// Export the Express API
module.exports = app;
