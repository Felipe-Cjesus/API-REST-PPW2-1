const express = require("express");
const router = express.Router();
const routes = {
  curso: require("./curso"),
  // universidade: require("./universidade"),
  clube: require("./clube"),
  // estadio: require("./estadio"),
};

// middleware que converte o body para um objeto
router.use(express.json());
router.use("/cursos", routes.curso);
router.use("/clubes", routes.clube);

module.exports = router;
