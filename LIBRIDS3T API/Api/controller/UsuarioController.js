/*   IMPORTA O MODULO DO EXPRESS   */
import express from "express";

/*   IMPORTA A MODEL DO USUARIO   */
import Usuario from "../model/Usuario";

/*   CRIA O GERENCIADOR DE ROTAS DO EXPRESS PARA O DOMINIO USUARIO   */
const router = express.Router();

router.post('/usuario/inserirUsuario', (req, res)=>{

    res.status(200).json({'MSG': 'Rota de insercao de usuario'});

});