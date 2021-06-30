const mongoose = require("../dataBase");

let estadioSchema = new mongoose.Schema(
  {
    nomeEstadio: String,
    capacidade: Number,
    pais: String,
    clubeMandante: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Estadio", estadioSchema);
