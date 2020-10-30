var express = require('express');
var router = express.Router();
var knex = require('../mysql/mysql')
router.route('/produto')
    .get(function (req, res) {
        knex.select().table('produtos').then((response) => {
            res.send(response);
        })
    });

router.route('/fornecedor')
    .post((req, res) => {
        knex("fornecedor").insert(req.body)
            .then(result => {
                res.status(200).send("Sucesso");
            })
            .catch(err => {
                res.send(err);
            })

    });
router.route('/descricao')
    .post((req, res) => {
        knex("descricao").insert(req.body)
            .then(result => {
                res.status(200).send("Sucesso");
            })
            .catch(err => {
                res.send(err);
            })

    });


module.exports = router;