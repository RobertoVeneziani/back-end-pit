require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const app = express();
const port = 4001;

// Importa as rotas
const clienteRotas = require('./Routers/ClienteRoutes');
const salasRotas = require('./Routers/SalasRoutes');
const planosRotas = require('./Routers/PlanosRoutes');
const horariosRotas = require('./Routers/HorariosRoutes');
const funcionariosRotas = require('./Routers/FuncionarioRoutes');
const authenticateToken = require('./Midd/authenticateToken');

app.use(express.json());
app.use(cors());
app.use(cookieParser());

// Adiciona as rotas públicas (não requerem autenticação)
app.use('/clientes', clienteRotas);
app.use('/salas',salasRotas);
app.use('/planos', planosRotas);
app.use('/horarios',horariosRotas);

// Adiciona o middleware de autenticação somente para as rotas protegidas
app.use('/funcionarios', funcionariosRotas);

app.listen(port, () => `Executando na porta ${port}`);
