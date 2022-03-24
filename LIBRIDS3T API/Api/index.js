// Importa o pacote express 
    const express = require('express');

//Instancia o pacote express
    const app  = express();

//Importa os arquivos de model
    const usuario = require('./model/Usuario');

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