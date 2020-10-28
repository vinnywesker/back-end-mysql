var express = require('express');
var router = express.Router();

var Empresa = require('../mongodb/mongoDB');

router.route('/cadastros')

    .post(function (req, res) {
        var empresa = new Empresa();
        var DateNow = Date()
        empresa.nome = req.body.nome;
        empresa.email = req.body.email;
        empresa.empNome = req.body.empNome;
        empresa.ip = req.body.ip;
        empresa.date = DateNow;

        empresa.save(function (error) {
            if (error) {
                return res.send(error);
            }
            res.sendStatus(201).send({
                Autenticado: true
            })
        });
    })

    .get(function (req, res) {

        Empresa.find(function (err, cadastros) {
            if (err)
                res.send(err);

            res.json(cadastros);
        });
    });

module.exports = router;