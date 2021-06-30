const mongoose = require("../dataBase");

let universidadeSchema = new mongoose.Schema(
  {
    nomeUniversidade: String,
    anoFundacao: Number,
    contacto: Number,
    localizacao: String,
  },
  { timestamps: true }
);
module.exports = mongoose.model("Universidade", universidadeSchema);
