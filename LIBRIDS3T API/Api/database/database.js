//Importa o módulo do sequelize 
    const sequelize = require('sequelize');

/* 
    Cria uma conexao com o banco de dados.

    PARAMETROS:
    1- Nome do Banco de dados
    2- Usuario do banco de dados
    3- Senha do banco de dados
    4- Objeto JSON que determina o local do banco de dados (Localhost:3000) e o tipo do banco de dados (Mysql)

*/
    const connection = new sequelize(
        'libri', 
        'root',
        '12345678',
        {
            host: 'localhost',
            dialect: 'mysql'
        }
    );
//Exportando a const connection para outros arquivos acessar esse módulo de conexao com o banco
    module.exports = connection;