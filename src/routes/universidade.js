const express = require("express");
const router = express.Router();
const Universidade = require("../models/Universidade");

//retorna todas as universidades cadastradas no banco
router.get("/", async (req, res, next) => {
  try {
    let filter = {};
    let universidade = [];
    if (req.query.universidade) filter.universidade = req.query.universidade;

    const limit = Math.min(parseInt(req.query.limit), 10) || 10;
    const skip = parseInt(req.query.skip) || 0;
    universidade = await Universidade.find(filter).limit(limit).skip(skip);
    res.json(universidade);
  } catch (error) {
    next(error);
  }
});

// retorna apenas um universidade baseando no id passado
router.get("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    let universidade = await Universidade.findById(id);

    if (!universidade) {
      res.statusCode = 404;
      throw new Error("O objeto procurado não foi encontrado");
    }
    res.json(universidade);
  } catch (error) {
    next(error);
  }
});

// salvando um objeto enviado através do body
router.post("/", async (req, res, next) => {
  try {
    const universidade = new Universidade(req.body);
    const resultado = await universidade.save();
    res.json(resultado);
  } catch (error) {
    next(error);
  }
});

// modificar uma parte da universidade de acordo com id e o body
router.put("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const Body = req.body;

    const resultado = await Universidade.findByIdAndUpdate(id, Body);
    if (!resultado) {
      res.statusCode = 404;
      throw new Error("O objeto não foi encontrado");
    }

    res.json(resultado);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;

    const resultado = await Universidade.findByIdAndDelete(id);
    if (!resultado) {
      res.statusCode = 404;
      throw new Error("O objeto não foi encontrado");
    }

    res.json(resultado);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
