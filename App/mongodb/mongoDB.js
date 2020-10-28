var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EmpresaSchema = new Schema({
    nome: String,
    email: String,
    empNome: String,
    ip: String,
    date: String
});

mongoose.connect(process.env.MONGO_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true }); //via Modulus

module.exports = mongoose.model('Empresa', EmpresaSchema); // lembrar detalhe nome