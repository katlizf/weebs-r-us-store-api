const express = require('express')
const router = express.Router()
const products = require('../products.json')


router.get('/', (req, res) => {
    res.json(products)
})

router.get('/:product_id', (req, res) => {
    const product_id = req.params.product_id
    if (products.length <= product_id) {
        return res.json({message: 'Product not found'})
    }
    res.json(products[product_id])
})

module.exports = router