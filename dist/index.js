"use strict";
var _a;
require("dotenv").config();
const express = require("express");
const routes = require("./router/router");
const cors = require("cors");
const app = express();
app.use(express.json(), cors(), routes);
app.listen((_a = process.env.PORT) !== null && _a !== void 0 ? _a : 4000, () => console.log("online in port 4000"));
