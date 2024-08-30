const PlanosController = require('../Controller/PlanosController');

const PlanosC = new PlanosController;
const express = require('express');
const router = express.Router();

router.get('/',PlanosC.Obter);
router.get('/:id',PlanosC.ObterID);
router.get('/buscar/:busca',PlanosC.ObterNome);
router.post('/',PlanosC.Inserir);
router.put('/:id',PlanosC.Atualizar);
router.delete('/:id',PlanosC.Excluir);

module.exports = router;