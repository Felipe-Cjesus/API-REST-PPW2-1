const mongoose = require("../dataBase");

let universidadeSchema = new mongoose.Schema(
  {
    "universidade": String,
    "anoFundacao": Number,
    "categoria": String,
    "localizacao": String,
    "site":String
  },
  { timestamps: true }
);
module.exports = mongoose.model("Universidade", universidadeSchema);
