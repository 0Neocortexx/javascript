/*  Anotações:
Depois do código pronto, rodar backend: 
terminal -> pasta -> node (nome do arquivo);
Para fechar:
ctrl + c

Rota padrao:
    http://localhost:3000/

*/


/* Sem o express

// Dizendo que precisa do http
const http = require('http');
// servidor local
const hostname = '127.0.0.1';
// porta
const port = 3000;


const server = http.createServer((req,res) => {
    res.setHeader('Content-Type','text/plain');
    res.statusCode = 200;
    res.end("HELLO WORLD");
});

server.listen(port,hostname, () => {
    console.log("Servidor rodando ...;");
});    */


// sempre fazer com o express (muito melhor)
// Com o express 
// definir o express
const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();


// rota get
router.get('/', function(req, res) {
    // pegar os arquivos no diretorio sem erro
    res.sendFile(path.join(__dirname + '/index.html'));
})

router.get('/sobre', function(req, res) {
    // pegar os arquivos no diretorio sem erro
    res.sendFile(path.join(__dirname + '/sobre.html'));
})


app.use('/', router);

app.listen(process.env.port | 3000);

console.log("Ta rodando agora ala bobao")