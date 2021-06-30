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

// retornando apenas um curso baseando no id passado
router.get("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    let curso = await Curso.findById(id);
    if (!curso) {
      res.statusCode = 404;
      throw new Error("O objeto procurado não foi encontrado");
    }
    res.json(curso);
  } catch (error) {
    next(error);
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

// modificando uma parte do curso passando o id do mesmo e o body
router.put("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const Body = req.body;

    const resultado = await Curso.findByIdAndUpdate(id, Body);
    if (!resultado) {
      res.statusCode = 404;
      throw new Error("O ID não encontrado");
    }

    res.json(resultado);
  } catch (err) {
    next(err);
  }
});

// eliminando um curso passando o id do curso
router.delete("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;

    const resultado = await Curso.findByIdAndDelete(id);
    if (!resultado) {
      res.statusCode = 404;
      throw new Error("O ID não foi encontrado");
    }

    res.json(resultado);
  } catch (error) {
    next(error);
  }
});
module.exports = router;
