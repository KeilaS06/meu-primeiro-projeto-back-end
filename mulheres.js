const express = require("express")
const router = express.Router() //configuração da rota

const app = express()
const porta = 3333;

// Constante pra guardar as informações das mulheres
const mulheres = [
  {
    nome: 'Keila Sales',
    imagem: 'https://avatars.githubusercontent.com/u/67611596?v=4',
    minibio: 'Desenvolvedora Web'
  },

  {
    nome: 'Simara Conceição',
    imagem: 'https://github.com/simaraconceicao.png',
    minibio: 'Desenvolvedora e Instrutora'
  },

  {
    nome: 'Iana Chan',
    imagem: 'https://media.licdn.com/dms/image/D4D03AQH94QQ7TrKasQ/profile-displayphoto-shrink_100_100/0/1686007268307?e=1715817600&v=beta&t=k3ttggzgLDb5wddLcE9bWGeclo-vRKtIL9O8tM-A2iw',
    minibio: 'Fundadora da PrograMaria'
  }
]

// Função que vai ser chamada no get
function mostraMulheres(request, response) {
  response.json(mulheres)
}

function mostraPorta() {
  console.log("Servidor criado e rodando na porta ",porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)