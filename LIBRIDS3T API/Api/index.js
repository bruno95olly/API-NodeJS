// Importa o pacote express 
    const express = require('express');

//Instancia o pacote express
    const app  = express();

/*  CONFIGURACAO DO EXPRESS PARA MANIPULACAO DO FORMATO JSON   */
app.use(express.json());
app.use(express.urlencoded({extended: true}))

//Importa a controller de usuario

//Importa os arquivos de model
    //const usuario = require('./model/Usuario');

const usuarioController = require('./controller/UsuarioController');

app.use('/', usuarioController);

/***   Servidor auto contido do express
    Recebe as requisições e devolve a resposta

    Parametros de listen:
    1 - PORTA LÓGICA
    2 - CALLBACK
***/
app.listen(3000, ()=>{
    console.log("Servidor rodando na url: http://localhost:3000");
    console.log('teste');
});