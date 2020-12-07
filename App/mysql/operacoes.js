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
        case 'produtos':
            obterNomeLinhaCodigo = 'codigo_produto'
            break;
        case 'fornecedores':
            obterNomeLinhaCodigo = 'codigo_fornecedor'
            break;
        case 'descricao':
            obterNomeLinhaCodigo = 'codigo_descricao'
            break;
        case 'entrada_saida':
            obterNomeLinhaCodigo = 'codigo_de_barras'
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

const obterDadosTabela = async (tabela, res) => {
    knex.select().table(tabela)
        .then((response) => {
            res.send(response);
        })
        .catch(err => {
            res.send(err);
        })
}

module.exports = {
    obterDadosTabela,
    deletarDadosTabela,
    inserirDadosTabela
}