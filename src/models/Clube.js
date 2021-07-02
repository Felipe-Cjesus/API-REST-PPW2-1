const mongoose = require("../dataBase/index");

let clubeSchema = new mongoose.Schema(
  {
    clube: String,
    anoFundacao: Number,
    pais: Object,
    estadio: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Estadio",
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Clube", clubeSchema);
