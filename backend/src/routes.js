const express = require("express");

const routes = express.Router();

const calcController = require("./controllers/calcController");

routes.post("/add", calcController.add);

routes.post("/sub", calcController.sub);

routes.post("/multi", calcController.multi);

routes.post("/div", calcController.div);

module.exports = routes;