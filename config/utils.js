const utils = {} || utils;

const { Pool, Client } = require('pg');
const connectionString = '#connectionString';

const pool = new Pool({
    connectionString: connectionString,
    ssl: true,
});

utils.sqlSelectMatricula = function (email) {
    return `SELECT matricula 
    FROM   aluno 
    WHERE  Upper(email) LIKE Upper('${email}%'`;
}

utils.whereExtrato = function (query) {
    var result = '';

    if (query.dtInicio !== "0" && query.dtFim !== "0") {
        result = `
            WHERE Upper(matricula) = Upper('${query.matricula}')
              AND data between '${query.dtInicio}' and '${query.dtFim}'
            ORDER BY data_hora DESC
        `;
    } else {
        result = ` WHERE Upper(matricula) = Upper('${query.matricula}') 
                     AND EXTRACT(MONTH FROM data_hora) = EXTRACT(MONTH FROM now()) 
                   ORDER BY data_hora DESC `;
    }

    return result;

}

utils.responseConnectionGet = function (querySql, res) {
    pool.query(querySql, (err, response) => {
        if (response != undefined) {
            return res.json(response.rows);
        }
    });
}

utils.responseConnectionPost = function (querySql, res) {
    pool.query(querySql, (err, response) => {
        if (response != undefined) {
            res.json(response.fields);
        }
    });
}

module.exports = utils;