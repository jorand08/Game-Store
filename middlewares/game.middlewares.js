const { Game } = require("../models/game.model");
const { catchAsync } = require("../utils/catchAsync.util");

const gameExists = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const game = await Game.findOne({
    attributes: { exclude: ["password"] },
    where: { id },
  });

  // If user doesn't exist, send error message
  if (!game) {
    return next(new AppError("Game not found", 404));
  }

  // req.anyPropName = 'anyValue'
  req.game = game;
  next();
});

module.exports = { gameExists };
