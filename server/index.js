/**
 * Required External Modules
 */
const http = require('http');
const express = require("express");
const path = require("path");
const { setSocketInstance } = require('./socket');
/**
 * App Variables
 * 
 */

var cors = require('cors')

const app = express();
const port = process.env.PORT || "3001";

const server = http.Server(app);
setSocketInstance(server);

app.use(cors());

/**
 * Routes Definitions
 */

app.get("/", (req, res) => {
    res.status(200).send("WHATABYTE: Food For Devs");
  });


  /**
 * Server Activation
 */

server.listen(port, () => {
    console.log(`Listening to requests on http://127.0.0.1:${port}`);
  });
