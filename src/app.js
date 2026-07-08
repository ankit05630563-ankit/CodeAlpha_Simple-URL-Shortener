const express = require("express");

const app = express();

app.use(express.json());

const urlRoutes = require("../routes/url.routes");

app.use("/", urlRoutes);

module.exports = app;