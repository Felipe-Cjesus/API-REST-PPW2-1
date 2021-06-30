const mongoose = require("mongoose");
const options = { useNewUrlParser: true, useUnifiedTopology: true };
require("dotenv").config();

mongoose.connect(process.env.DB, options, function (err) {
  if (!err) {
    console.log("Conectado ao banco");
  }
});

module.exports = mongoose;
