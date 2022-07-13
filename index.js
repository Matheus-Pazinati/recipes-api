const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

const port = process.env.PORT || 3000;

const recipesRoute = require('./routes/recipes')
app.use(recipesRoute)

app.listen(port)