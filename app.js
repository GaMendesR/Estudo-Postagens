import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

import express from "express";
import { Sequelize } from "sequelize";
import { ExpressHandlebars } from "express-handlebars";

// Conexão com o Banco de dados MySQL
const sequelize = new Sequelize("teste", "root", "root", {
    host:"localhost",
    dialect: "mysql"
})

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();

//Configuração
app.engine("handlebars", Handlebars({defaultLayout: "main"}))
app.set("view engine", "handlebars")


app.listen(8081, function(){
    console.log("Rondando o Servidor: http://localhost:8081")
})
