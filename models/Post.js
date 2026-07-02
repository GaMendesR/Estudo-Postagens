import db from "./db.js"

const Post = db.sequelize.define("postagens", {
    titulo: {
        type: db.Sequelize.STRING
    },
    conteudo: {
        type: db.Sequelize.TEXT
    }
});

await Post.sync();  // Cria a tabela apenas se não existir

export { Post }
