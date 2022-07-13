const express = require('express');

const router = express.Router()

const path = require('path')
const fs = require('fs')


const dbRecipes = path.resolve(__dirname, '../json-db/recipes.json')
router.get('/', (req, res) => res.send(`<h1>Acesse a rota /recipes para ver todas as receitas </h1>`))

router.get('/recipes', (req, res) => {
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
      return res.status(500).json({ erro: 'Erro de execução.' })
    }
  })

  module.exports = router