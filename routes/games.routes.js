const express = require("express");

// Controllers
const {
  createGames,
  getAllGames,
  updateGames,
  deleteGames,
  createReview,
} = require("../controllers/games.controller");

// Middlewares
const {
  protectSession,
  protectUsersAccount,
} = require("../middlewares/auth.middlewares");
const {
  createGameValidator,
} = require("../middlewares/validators.middlewares");

const { gameExists } = require("../middlewares/game.middlewares");

const gamesRouter = express.Router();

gamesRouter.get("/", getAllGames);

// Protecting below endpoints
gamesRouter.use(protectSession);

gamesRouter.post("/", createGameValidator, createGames);

gamesRouter.patch("/:id", gameExists, updateGames);

gamesRouter.delete("/:id", gameExists, deleteGames);

gamesRouter.post("/reviews/:gameId", createReview);

module.exports = { gamesRouter };
