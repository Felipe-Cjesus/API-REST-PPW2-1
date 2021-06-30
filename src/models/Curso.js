const mongoose = require("../dataBase");

let cursoSchema = new mongoose.Schema(
  {
    curso: String,
    duracao: String,
    tipoDeCurso: String,
    modalidade: String,
    mensalidade: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Curso", cursoSchema);
