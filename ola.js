const express = require("express")
const router = express.Router() // configurando a rota

const app = express()
const porta = 3333;

// Adicionando os parametros request e response
function mostraOla(request, response) {
  response.send("Olá, mundo!")
}

function mostraPorta() {
  console.log("Servidor criado e rodando na porta ",porta)
}

app.use(router.get('/ola', mostraOla)) // configuração da rota
app.listen(porta, mostraPorta)