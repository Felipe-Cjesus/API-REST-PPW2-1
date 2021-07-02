const express = require("express");
const router = express.Router();
const Clube = require("../models/Clube");
const { default: axios } = require("axios");

// Retorna todos os clube
router.get("/", async (req, res, next) => {
  try {
    let filter = {};
    if (req.query.clube) filter.clube = req.query.clube;

    const limit = Math.min(parseInt(req.query.limit), 100) || 100;
    const skip = parseInt(req.query.skip) || 0;

    let clube = [];
    clube = await Clube.find(filter).limit(limit).skip(skip);

    res.json(clube);
  } catch (err) {
    next(err);
  }
});

// retornando apenas um clube baseando no id passado
router.get("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    let clube = await Clube.findById(id).populate("estadio");

    if (!clube && clube == null) {
      res.statusCode = 404;
      throw new Error("O objeto procurado não foi encontrado");
    }

    const { data } = await axios.get(
      "https://projetofinal-ppw2.herokuapp.com/api/pais/"
    );

    let idPais = clube.pais;

    for (let i in data) {
      if (data[i]._id == idPais) {
        clube.pais = data[i];
        clube.sigla = data[i];
      }
    }

    res.json(clube);
  } catch (error) {
    next(error);
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

// modificando uma parte do clube passando o id do mesmo e o body
router.put("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const Body = req.body;

    const resultado = await Clube.findByIdAndUpdate(id, Body);
    if (!resultado && resultado == null) {
      res.statusCode = 404;
      throw new Error("O objeto não foi encontrado");
    }

    res.json(resultado);
  } catch (error) {
    next(error);
  }
});

// eliminando um Estadio passando o id do clube
router.delete("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const resultado = await Clube.findByIdAndDelete(id);

    if (!resultado && resultado == null) {
      res.statusCode = 404;
      throw new Error("O objeto não foi encontrado");
    }

    res.json(resultado);
  } catch (error) {
    next(error);
  }
});
module.exports = router;
