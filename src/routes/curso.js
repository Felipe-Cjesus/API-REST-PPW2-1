const express = require("express");
const router = express.Router();
const Curso = require("../models/Curso");

// Retorna todos os cursos
router.get("/", async (req, res, next) => {
  try {
    let filter = {};
    if (req.query.curso) filter.curso = req.query.curso;

    const limit = Math.min(parseInt(req.query.limit), 10) || 10;
    const skip = parseInt(req.query.skip) || 0;

    let curso = [];
    curso = await Curso.find(filter).limit(limit).skip(skip);

    res.json(curso);
  } catch (err) {
    next(err);
  }
});

// Salva um objeto enviado através do body
router.post("/", async (req, res, next) => {
  try {
    const curso = new Curso(req.body);
    const resultado = await curso.save();
    res.json(resultado);
  } catch (error) {
    next(error);
  }
});
module.exports = router;
