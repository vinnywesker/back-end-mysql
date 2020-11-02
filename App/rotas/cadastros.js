var express = require('express');
var router = express.Router();
var knex = require('../mysql/mysql')


const inserirDadosTabela = async (tabela, itens, res) => {
    knex(tabela).insert(itens)
        .then(result => {
            res.status(200).send({
                mensagem: 'SUCESSO'
            });
        })
        .catch(err => {
            res.send(err);
        });
}
const deletarDadosTabela = async (tabela, Codigo, res) => {
    let obterNomeLinhaCodigo;
    switch (tabela) {
        case 'produto':
            obterNomeLinhaCodigo = 'CodProduto'
            break;
        case 'fornecedor':
            obterNomeLinhaCodigo = 'CodFornecedor'
            break;
        case 'descricao':
            obterNomeLinhaCodigo = 'CodDescricao'
            break;
    }
    knex(tabela).where(obterNomeLinhaCodigo, Codigo).del()
        .then(() => {
            res.send({
                mensagem: 'SUCESSO'
            });
        })
        .catch(err => {
            res.send(err);
        })
}

router.route('/produtos')
    .get(function (req, res) {
        knex.select().table('fornecedor')
            .then((response) => {
                res.send(response);
            })
            .catch(err => {
                res.send(err);
            })
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
        deletarDadosTabela(nomeTabela, req.body.Codigo, res);
    });

module.exports = router;