const restify = require('restify');

const errs = require('restify-errors');
const PORT = process.env.PORT|| 5000;
const server = restify.createServer({
  name: 'myapp',
  version: '1.0.0'
});

var knex = require('knex')({
    client: 'mysql',
    connection: {
      host : 'sql10.freemysqlhosting.net',
      user : 'sql10246290',
      password : 'p9M16wVRTv',
      database : 'sql10246290'
    }
  });

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

server.get('/cidades', (req, res, next) => {
    knex('vwcidades').then((dados) => {
        res.send(dados);
    }, next)
});

server.get('/categorias', (req, res, next) => {
    knex('vwcategorias').then((dados) => {
        res.send(dados);
    }, next)
});

server.get('/estabelecimentos', (req, res, next) => {
    knex('vwestabelecimentos').then((dados) => {
        res.send(dados);
    }, next)
});


server.listen(PORT);
console.log(`Running on port:${PORT}`);
