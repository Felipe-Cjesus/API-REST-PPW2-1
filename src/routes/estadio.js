const express = require("express");
const router = express.Router();
const { default: axios } = require("axios");
const Estadio = require("../models/Estadio");

// Retorna todos os Estadios
router.get("/", async (req, res, next) => {
  try {
    let filter = {};
    if (req.query.estadio) filter.estadio = req.query.estadio;

    const limit = Math.min(parseInt(req.query.limit), 100) || 100;
    const skip = parseInt(req.query.skip) || 0;

    let estadio = [];
    estadio = await Estadio.find(filter)
      .limit(limit)
      .skip(skip)
      .populate("clubeMandante");

    res.json(estadio);
  } catch (err) {
    next(err);
  }
});

// retornando apenas um Estadio baseando no id passado
router.get("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    let estadio = await Estadio.findById(id);
    if (!estadio) {
      res.statusCode = 404;
      throw new Error("O objeto procurado não foi encontrado");
    }
    const { data } = await axios.get(
      "https://projetofinal-ppw2.herokuapp.com/api/pais/"
    );
    let idPais = estadio.pais;
    // console.log(estadio.id)
    for (let i in data) {
      if (data[i]._id == idPais) {
        estadio.pais = data[i];
      }
    }
    // console.log(ID);

    res.json(estadio);
  } catch (error) {
    next(error);
  }
});

// Salva um objeto enviado através do body
router.post("/", async (req, res, next) => {
  try {
    const estadio = new Estadio(req.body);
    const resultado = await estadio.save();
    res.json(resultado);
  } catch (error) {
    next(error);
  }
});

// modificando uma parte do Estadio passando o id do mesmo e o body
router.put("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const Body = req.body;

    const resultado = await Estadio.findByIdAndUpdate(id, Body);
    if (!resultado && resultado == null) {
      res.statusCode = 404;
      throw new Error("O objeto não foi encontrado");
    }

    res.json(resultado);
  } catch (err) {
    next(err);
  }
});

// eliminando um Estadio passando o id do Estadio
router.delete("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;

    const resultado = await Estadio.findByIdAndDelete(id);
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
