const express = require("express");
const corsOptions = require("./config/configCors");
var cors = require('cors')
//definindo as rotas
const router = express.Router();
const frequencyController = require("./controllers/frequencyController.js");

router.get('/', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", corsOptions.origin)
    res.json({ message: 'Acesso ao Server, OK!!' });
});

router.post('/frequenta', cors(), (req, res) => {
    frequencyController.registrarChamada(req, res);
});

router.get('/aluno/:email?', (req, res) => {
    frequencyController.getMatriculaPorAluno(req, res);
});

router.get('/registro/:email?', (req, res) => {
    frequencyController.getRegistro(req, res);
});

router.get('/extrato/', (req, res) => {
    frequencyController.getExtrato(req, res);
});


module.exports = router;