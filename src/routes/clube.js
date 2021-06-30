const express = require("express");
const router = express.Router();
const Clube = require("../models/Clube");

// Retorna todos os clube
router.get("/", async (req, res, next) => {
  try {
    let filter = {};
    if (req.query.clube) filter.clube = req.query.clube;

    const limit = Math.min(parseInt(req.query.limit), 10) || 10;
    const skip = parseInt(req.query.skip) || 0;

    let clube = [];
    clube = await Clube.find(filter).limit(limit).skip(skip);

    res.json(clube);
  } catch (err) {
    next(err);
  }
});

// Salva um objeto enviado através do body
router.post("/", async (req, res, next) => {
  try {
    const clube = new Clube(req.body);
    const resultado = await clube.save();
    res.json(resultado);
  } catch (error) {
    next(error);
  }
});
module.exports = router;
