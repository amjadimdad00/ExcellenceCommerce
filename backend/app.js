const express = require("express");
const app = express();

app.use(express.json());

// Route Imports
const product = require("./routes/productRoute");

// Using Routes
app.use("/api/v1", product);

module.exports = app;
