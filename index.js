const express = require('express')
const bodyParser = require('body-parser')
require('dotenv/config')

const app = express()
app.use(bodyParser.json())
app.use(express.static('./public'))

// Import Routes
const apparelRouter = require('./routes/apparelRoutes')
const collectablesRouter = require('./routes/collectablesRoutes')
const animeRouter = require('./routes/animeRoutes')
const productTypesRouter = require('./routes/productTypesRoutes')


app.use('/apparel', apparelRouter)
app.use('/collectables', collectablesRouter)
app.use('/anime', animeRouter)
app.use('/productTypes', productTypesRouter)

const PORT = process.env.PORT || 8000
app.listen(PORT, () => console.log(`Running on port ${PORT}`))