const frequencyModel = require("../model/frequencyModel.js");
const utils = require('../config/utils.js');
const corsOptions = require("../config/configCors");

const controller = {} || controller;

controller.registrarChamada = function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", corsOptions.origin, corsOptions.methods);
    const email = req.body.email.substring(0, 150), querySql = frequencyModel.queryGetCategoria(email);
    utils.responseConnectionPost(querySql, res);
}

controller.getMatriculaPorAluno = function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", corsOptions.origin);
    const value = req.params.email, querySql = frequencyModel.queryGetMatriculaPorAluno(value);
    utils.responseConnectionGet(querySql, res); 0
}

controller.getRegistro = function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", corsOptions.origin);
    const value = req.params.email, querySql = frequencyModel.queryRegistro(value);
    utils.responseConnectionGet(querySql, res);
}

controller.getExtrato = function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", corsOptions.origin);
    const value = req.query, querySql = frequencyModel.queryExtrato(value);
    utils.responseConnectionGet(querySql, res);
}

module.exports = controller;