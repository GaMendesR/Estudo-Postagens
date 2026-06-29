import { fileURLToPath } from "node:url";
import { dirname } from "node:path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import express from "express";
import { Sequelize } from "sequelize";
import { engine } from "express-handlebars";
import bodyParser from "body-parser";


// Conexão com o Banco de dados MySQL
const sequelize = new Sequelize("teste", "root", "root", {
    host:"localhost",
    dialect: "mysql"
})

const app = express();

//Configuração Template Engine
app.engine("handlebars", engine({defaultLayout: "main"}));
app.set("view engine", "handlebars");

//Configuração BodyParser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


app.get("/cad", function(req, res) {
    res.render("formulario")
});

app.post("/add", function(req, res) {
    res.send("Texto: "+req.body.titulo + " Conteúdo: "+req.body.conteudo)
});

app.listen(8081, function(){
    console.log("Rondando o Servidor: http://localhost:8081")
});
