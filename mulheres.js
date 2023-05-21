const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333;

const mulheres = [
    {
        nome: 'Keila Sales',
        imagem: 'https://avatars.githubusercontent.com/u/67611596?v=4',
        minibio: 'Desenvolvedora'
    },

    {
        nome: 'Simara Conceição',
        imagem: 'https://github.com/simaraconceicao.png',
        minibio: 'Desenvolvedora e Instrutora'
    },

    {
        nome: 'Iana',
        imagem: 'https://bit.ly/3JCXBqP',
        minibio: 'Fundadora da PrograMaria'
    }
]

function mostraMulheres(request, response) {
    response.json(mulheres)
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ",porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)