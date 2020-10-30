var knex = require('knex')({
    client: 'mysql',
    connection: {
        host: '18.228.117.122',
        user: 'Administrador',
        password: 'EGZ=lX4J(S$MBSyg;s*$2PAR(LVXyqhe',
        database: 'dbo'
    }
});

module.exports = knex;