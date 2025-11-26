import "reflect-metadata";
import express, { Response } from "express";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API rodando com TypeORM + Express!");
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));