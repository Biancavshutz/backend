// app.js
const express = require("express");
const app = express();
const port = 3000;


// Middleware(COMPONENTE DO EXPRESS QUE AJUDA NA FUNCIONALIDADE) para analisar o corpo das requisições em JSON
app.use(express.json());

// Importando as rotas do cliente
const alocacaoRoutes = require('./routes/alocacao');
const professorRoutes = require('./routes/professores');
const salaRoutes = require('./routes/salas');
const visaoRoutes = require('./routes/visao');

// Usando as rotas do cliente com o prefixo '/clientes'
app.use('/Alocacao', alocacaoRoutes);
app.use('/Professor', professorRoutes);
app.use('/Sala', salaRoutes);
app.use('/Visao', visaoRoutes);
// Iniciando o servidor na porta especificada
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
