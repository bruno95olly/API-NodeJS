/*   IMPORTA O MODULO DO EXPRESS   */
const express = require ("express");

/*   IMPORTA A MODEL DO USUARIO   */
const Usuario =  require("../model/Usuario");

/*   CRIA O GERENCIADOR DE ROTAS DO EXPRESS PARA O DOMINIO USUARIO   */
const router = express.Router();

router.post('/usuario/inserirUsuario', (req, res)=>{

    console.log(req.body);

    //destrect 
    //(pega o json feito no postman > body > raw e insere nas variaveis de acordo com os nomes que forem iguais)
    const {nome, sobrenome, email, foto, login, senha} = req.body;

    Usuario.create({
        nome,
        sobrenome,
        email,
        foto,
        login,
        senha
    }).then(
        res.status(200).json({'MSG': 'Rota de insercao de usuario'})
    );
});

module.exports = router;