const express = require('express')
const router = express.Router() // configuração da rota

const app = express()
const porta = 3333;

// Função que vai ser chamada no get
function mostraMulher(request, response) {
  response.json({
    nome: 'Keila Sales',
    imagem: 'https://avatars.githubusercontent.com/u/67611596?v=4',
    minibio: 'Desenvolvedora Web'
  })
}

function mostraPorta() {
  console.log('Servidor criado e rodando na porta ',porta)
}

app.use(router.get('/mulher', mostraMulher)) // configuração da rota
app.listen(porta, mostraPorta)