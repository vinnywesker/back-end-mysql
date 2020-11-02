var express = require('express');
var app = express();
var Cadastros = require("./rotas/cadastros")
var bodyParser = require("body-parser")

const port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use((req, res, next) => { // permissões cors
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Operation");
    next();
});

// rotas serão adicionadas aqui ----------/

app.use('/api', Cadastros);

// ---------------------------------------/

app.listen(port, () => {
    console.log("Servidor aberto na porta: " + port);
});