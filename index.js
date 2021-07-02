const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
const routes = require("./src/routes");
const errorHandler = require("./src/middleware/errorHandler");
const jwt = require("jsonwebtoken");

app.post("/login", async (req, res) => {
  // verificar se o usuário realmente é valido
  const token = jwt.sign({ id: "publico" }, "secreta", { expiresIn: 600 });
  res.json(token);
});

app.use(async (req, res, next) => {
  try {
    const authorization = req.headers.authorization;
    const token = authorization.split("Bearer")[1];
    const credencial = await jwt.verify(token, "secreta");
    next();
  } catch (error) {
    next(error);
  }
});

app.use("/api", routes);
app.use(errorHandler);

app.get("/", (req, res) => {
  res.json({
    name: "Projeto Final PPW-II",
    endpoint: ["/api/clubes", "/api/estadios"],
    description:
      "Para acessar mais recurso da API, basta utilizar os endpoint onde retorna os dados num formato JSON.",
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando: localhost:${PORT}`);
});
