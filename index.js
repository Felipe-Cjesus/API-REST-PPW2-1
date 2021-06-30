const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
const routes = require("./src/routes");

app.use("/api", routes);
app.get('/', (req, res)=>{
  res.json({
    "name":"Pedro Ventura",
    "endpoint":["api/cursos", "api/universidade", "api/clube", "api/estadio"],
    "description":""
  })
})
app.use(function (err, req, res, next) {
  if (res.statusCode == 200) {
    res.statusCode = 500;
  }
  res.json({ erro: err.message });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando: localhost:${PORT}`);
});
