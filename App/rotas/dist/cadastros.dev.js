"use strict";

var express = require('express');

var router = express.Router();

var knex = require('../mysql/mysql');

var inserirDadosTabela = function inserirDadosTabela(tabela, itens, res) {
  return regeneratorRuntime.async(function inserirDadosTabela$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          knex(tabela).insert(itens).then(function (result) {
            res.status(200).send({
              mensagem: 'SUCESSO'
            });
          })["catch"](function (err) {
            res.send(err);
          });

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
};

var deletarDadosTabela = function deletarDadosTabela(tabela, Codigo, res) {
  var obterNomeLinhaCodigo;
  return regeneratorRuntime.async(function deletarDadosTabela$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.t0 = tabela;
          _context2.next = _context2.t0 === 'produto' ? 3 : _context2.t0 === 'fornecedor' ? 5 : _context2.t0 === 'descricao' ? 7 : 9;
          break;

        case 3:
          obterNomeLinhaCodigo = 'CodProduto';
          return _context2.abrupt("break", 9);

        case 5:
          obterNomeLinhaCodigo = 'CodFornecedor';
          return _context2.abrupt("break", 9);

        case 7:
          obterNomeLinhaCodigo = 'CodDescricao';
          return _context2.abrupt("break", 9);

        case 9:
          knex(tabela).where(obterNomeLinhaCodigo, Codigo).del().then(function () {
            res.send({
              mensagem: 'SUCESSO'
            });
          })["catch"](function (err) {
            res.send(err);
          });

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  });
};

router.route('/produtos').get(function (req, res) {
  knex.select().table('fornecedor').then(function (response) {
    res.send(response);
  })["catch"](function (err) {
    res.send(err);
  });
}).post(function (req, res) {
  var nomeTabela = req.headers.operation;

  if (!nomeTabela) {
    return res.send({
      metodo: 'POST',
      mensagem: "ERR_OPERACAO_DADOS_N_ESPECIFICADA"
    });
  }

  ;
  return inserirDadosTabela(nomeTabela, req.body, res);
})["delete"](function (req, res) {
  var nomeTabela = req.headers.operation;

  if (!nomeTabela) {
    return res.send({
      metodo: 'DELETE',
      mensagem: "ERR_OPERACAO_DADOS_N_ESPECIFICADA"
    });
  }

  ;
  deletarDadosTabela(nomeTabela, req.body.Codigo, res);
});
module.exports = router;