const FuncionarioController = require('../Controller/FuncionarioController');
const express = require('express');
const router = express.Router();

const FuncionariosC = new FuncionarioController();

// Rota pública (não requer autenticação)
router.post('/autenticar', FuncionariosC.Autenticar);

// Rotas protegidas
router.get('/', FuncionariosC.Obter);
router.get('/:id', FuncionariosC.ObterID);
router.get('/buscar/:busca', FuncionariosC.ObterNome);
router.post('/', FuncionariosC.Inserir);
router.put('/:id', FuncionariosC.Atualizar);
router.delete('/:id', FuncionariosC.Excluir);

module.exports = router;
