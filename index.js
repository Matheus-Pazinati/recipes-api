const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

const path = require('path')
const fs = require('fs')

let port = process.env.PORT || 3000;
app.listen(port)

const dbRecipes = path.resolve(__dirname, './json-db/recipes.json')

//Rota raíz, mostra mensagem
app.get('/', (req, res) => res.send(`<h1>Acesse a rota /recipes para ver todas as receitas </h1>`))


//Rota de receitas, retorna o json
app.get('/recipes', (req, res) => {
  try {
    const data = fs.readFileSync(
      dbRecipes,
      'utf8',
    )
    const recipes = JSON.parse(data)
    return res.status(200).json(recipes)
  } 
  catch (error) {
    console.error(error)
    return response.status(500).json({ erro: 'Erro de execução.' })
  }
})