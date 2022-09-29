const { Console } = require("../models/console.model");
const { catchAsync } = require("../utils/catchAsync.util");

const createConsole = catchAsync(async (req, res, next) => {
  const { name, company } = req.body;
  const newConsole = await Console.create({ name, company });

  res.status(200).json({
    status: "Sucess",
    date: { newConsole },
  });
});

const getAllConsole = catchAsync(async (req, res, next) => {
  const console = await Console.findAll({ where: { status: "active" } });

  res.status(201).json({
    status: "success",
    data: { console },
  });
});

const updateConsole = catchAsync(async (req, res, next) => {
  const { name } = req.body;
  const { console } = req;

  await console.update({ name });

  res.status(200).json({
    status: "sucess",
    data: { console },
  });
});

const deleteConsole = catchAsync(async (req, res, next) => {
  const { console } = req;

  await console.update({ status: "deleted" });

  res.status(200).json({
    status: "sucess",
  });
});

module.exports = { createConsole, getAllConsole, updateConsole, deleteConsole };
