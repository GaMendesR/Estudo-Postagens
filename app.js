import { fileURLToPath } from "node:url";
import { dirname } from "node:path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import express from "express";
import { engine } from "express-handlebars";
import bodyParser from "body-parser";
import { Post } from "./models/Post.js";

const app = express();

// Configuração Template Engine com as opções de protótipo
app.engine("handlebars", engine({
    defaultLayout: "main",
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true
    }
}));
app.set("view engine", "handlebars");

//Configuração BodyParser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get("/", function(req, res){
    Post.findAll({order: [["id", "DESC"]]}).then(function(posts){
        res.render("home", {posts: posts})
    });
});

app.get("/cad", function(req, res) {
    res.render("formulario")
});

app.post("/add", function(req, res) {
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(function(){
        res.redirect("/")
    }).catch(function(erro){
        res.send("Erro na criação do Post: "+erro)
    });
});

app.get("/deletar/:id", function(req, res) {
    Post.destroy({where: {"id": req.params.id}}).then(function() {
        res.send("Postagem Deletada com Sucesso")
    }).catch(function(erro) {
        res.send("Essa postagem não existe! ("+erro+")")
    });
})


app.listen(8081, function(){
    console.log("Rondando o Servidor: http://localhost:8081")
});
