const model = {} || model
const utils = require('../config/utils.js');

model.queryRegistrarChamada = function (email) {
    return `
    INSERT INTO frequenta 
    (matricula, Id_Aula) 
    VALUES ( (${utils.sqlSelectMatricula(email)})), 
      (SELECT id_aula 
       FROM   aula 
       WHERE  cd_turma = (SELECT pertence.cd_turma 
                          FROM   aluno, 
                                 pertence 
                          WHERE  aluno.matricula = pertence.matricula 
                                 AND aluno.matricula = (${utils.sqlSelectMatricula(email)})))) ); 
    `;
}

model.queryGetMatriculaPorAluno = function (value) {
    return `SELECT matricula
            FROM   aluno
            WHERE  Upper(email) LIKE Upper('${value}%'); `;
}

model.queryRegistro = function (value) {
    return `SELECT aluno.matricula, 
                   frequenta.data_hora, 
                   frequenta.data 
            FROM   aluno, 
            frequenta 
            WHERE  Upper(email) LIKE Upper('${value}%') 
            AND aluno.matricula = frequenta.matricula 
            ORDER  BY data_hora DESC 
            LIMIT  1; `;
}

model.queryExtrato = function (value) {
    return 'SELECT * FROM FREQUENTA' + utils.whereExtrato(value.query);
}

model.queryDiaHoraMatricula = function (value) {
    return `SELECT
                hora_inicio,
                hora_final,
                dias
                FROM
                turma
            WHERE
            cd_turma = (
                    SELECT
                        cd_turma
                    FROM
                        pertence
                    WHERE
                        matricula = '${value}'
                        )`;
}

module.exports = model;