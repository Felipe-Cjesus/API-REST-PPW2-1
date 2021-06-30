const mongoose = require("../dataBase/index");

let clubeSchema = new mongoose.Schema(
  {
    clube: String,
    anoFundacao: Number,
    pais: String,
    sigla: String,
  },
  { timestamps: true }
);
module.exports = mongoose.model("Clube", clubeSchema);
