import { Sequelize, STRING } from "sequelize";


const sequelize = new Sequelize("teste", "root", "root", {
    host: "localhost",
    dialect: "mysql"
})

const Postagem = sequelize.define("postagens", {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
});

/*
Postagem.create({
    titulo: "Harry Potter",
    conteudo: "Historia de um menino que virou um bruxo e foi para Hogwarts."
})
*/

const Usuarios = sequelize.define("usuarios", {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})

/*
Usuarios.create({
    nome: "Gabriel",
    sobrenome: "Mendes Rodrigues",
    idade: 25,
    email: "ga-2001@hotmail.com"
})
*/
