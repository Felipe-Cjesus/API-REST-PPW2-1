const mongoose = require("../dataBase");
const Clube = require("../models/Clube");

let estadioSchema = new mongoose.Schema(
  {
    Estadio: String,
    capacidade: Number,
    pais: Object,
    clubeMandante: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Clube",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Estadio", estadioSchema);
