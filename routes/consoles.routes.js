const express = require("express");

//controllers
const {
  createConsole,
  getAllConsole,
  updateConsole,
  deleteConsole,
} = require("../controllers/consoles.controller");

//middlewares
const { protectSession } = require("../middlewares/auth.middlewares");
const {
  createConsoleValidators,
} = require("../middlewares/validators.middlewares");

const { consolesExists } = require("../middlewares/consoles.middleware");

const consolesRouter = express.Router();

consolesRouter.get("/", getAllConsole);
// Protecting below endpoints
consolesRouter.use(protectSession);

consolesRouter.post("/", createConsoleValidators, createConsole);

consolesRouter.patch("/:id", consolesExists, updateConsole);

consolesRouter.delete("/:id", consolesExists, deleteConsole);

module.exports = { consolesRouter };
