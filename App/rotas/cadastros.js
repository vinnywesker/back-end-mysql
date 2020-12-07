var express = require('express');
var router = express.Router();
var knex = require('../mysql/mysql')
var operacoes = require('../mysql/operacoes')

const {
    obterDadosTabela,
    deletarDadosTabela,
    inserirDadosTabela
} = operacoes;


router.route('/mysql')
    .get(function (req, res) {
        // const nomeTabela = req.headers.operation;
        // if(!nomeTabela){
        //     return res.send("ERR_OPERACAO_DADOS_N_ESPECIFICADA");
        // }
        // obterDadosTabela(nomeTabela, res);
        obterDadosTabela('fornecedores', res);
    })
    .post((req, res) => {
        const nomeTabela = req.headers.operation;
        if (!nomeTabela) {
            return res.send({
                metodo: 'POST',
                mensagem: "ERR_OPERACAO_DADOS_N_ESPECIFICADA"
            });
        };
        return inserirDadosTabela(nomeTabela, req.body, res);

    })
    .delete((req, res) => {
        const nomeTabela = req.headers.operation;
        if (!nomeTabela) {
            return res.send({
                metodo: 'DELETE',
                mensagem: "ERR_OPERACAO_DADOS_N_ESPECIFICADA"
            });
        };
        deletarDadosTabela(nomeTabela, req.body.codigo, res);
    });

module.exports = router;