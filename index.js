const express = require('express')
const bodyParser = require('body-parser')
require('dotenv/config')

const app = express()
app.use(bodyParser.json())
app.use(express.static('./public'))

// Import Routes
const productsRouter = require('./routes/productsRoutes')
const animeRouter = require('./routes/animeRoutes')
const productTypesRouter = require('./routes/productTypesRoutes')

// Middleware
// app.get('/', (req, res) => {
//     res.send('Welcome')
// })

app.use('/products', productsRouter)
app.use('/anime', animeRouter)
app.use('/productTypes', productTypesRouter)

const PORT = process.env.PORT || 8000
app.listen(PORT, () => console.log(`Running on port ${PORT}`))