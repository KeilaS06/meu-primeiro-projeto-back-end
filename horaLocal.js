const express = require("express")
const router = express.Router() // Configurando rota

const app = express()
const porta = 3333;

// Função pra mostrar a hora local
function mostraHora(request, response) {
  const data = new Date()
  const hora = data.toLocaleTimeString('pt-BR')
  response.send(hora)
}

function mostraPorta() {
  console.log("Servidor criado e rodando na porta ",porta)
}

app.use(router.get('/horaLocal', mostraHora)) // Configurando rota
app.listen(porta, mostraPorta)