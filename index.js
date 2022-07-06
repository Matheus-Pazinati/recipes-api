const express = require('express')
const app = express()

app.use(express.json())

let port = process.env.PORT || 3000;
app.listen(port)

app.route('/')
.get((req, res) => res.send("Receitas"))