var express = require('express');
var router = express.Router();
var knex = require('../mysql/mysql')

router.route('/produto')
    .get(function (req, res) {
        knex.select().table('produtos')
            .then((response) => {
                res.send(response);
            })
            .catch(err => {
                res.send(err);
            })
    });

router.route('/fornecedor')
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
        knex("fornecedor").insert(req.body)
            .then(result => {
                res.status(200).send("Sucesso");
            })
            .catch(err => {
                res.send(err);
            })
    })
    .delete((req, res) => {
        knex('fornecedor').where('CodFornecedor', req.body.CodFornecedor).del()
            .then(() => {
                res.send("Sucesso");
            })
            .catch(err => {
                res.send(err);
            })
    });
router.route('/descricao')
    .get(function (req, res) {
        knex.select().table('descricao')
            .then((response) => {
                res.send(response);
            })
            .catch(err => {
                res.send(err);
            })
    })
    .post((req, res) => {
        knex("descricao").insert(req.body)
            .then(result => {
                res.status(200).send("Sucesso");
            })
            .catch(err => {
                res.send(err);
            })

    })
    .delete((req, res) => {
        knex('descricao').where('CodDescricao', req.body.CodDescricao).del()
            .then(() => {
                res.send("Sucesso");
            })
            .catch(err => {
                res.send(err);
            })

    });
module.exports = router;