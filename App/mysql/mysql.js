const LINHA_CONEXAO = process.env.CONNECT_MYSQL;

let str = LINHA_CONEXAO.split('$');

console.log('Conectado ao DATABASE IP: ' + str[0] + ':' + str[1] + ', Usuario: ' + str[2])

var knex = require('knex')({
    client: 'mysql',
    connection: {
        host: str[0],
        port: str[1],
        user: str[2],
        password: str[3],
        database: str[4]
    }
});



module.exports = knex;