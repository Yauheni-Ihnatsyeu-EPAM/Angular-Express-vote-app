const connection = require('./conf');



function getCandidates(callback) {
    var sql = `SELECT id, name 
                FROM candidates;`;
    connection.query(sql, callback);
}

function getCandidate(id, callback) {
    var sql = `SELECT id, name 
                FROM candidates;
                WHERE id = ${id};`;
    connection.query(sql, callback);
}

function updateCandidates(id, name, callback) {
    var sql = `UPDATE candidates
                SET name = '${name}'
                WHERE id = ${id};`;
    connection.query(sql, callback);
}

function deleteCandidate(id, callback) {
    var sql = `DELETE FROM candidates
                WHERE id = ${id};`;
    connection.query(sql, callback);
}

function addCandidate(name, callback) {
    var sql = `INSERT INTO candidates (name) 
                VALUES ('${name}');`;
    connection.query(sql, callback);
}


//no time to 
module.exports = {
    getCandidates: getCandidates,
    getCandidate: getCandidate,
    updateCandidates: updateCandidates,
    deleteCandidate: deleteCandidate,
    addCandidate: addCandidate
}