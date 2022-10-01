const express = require('express')
const router = express.Router()
const productTypes = require('../db/productTypes.json')


router.get('/', (req, res) => {
    res.json(productTypes)
})

router.get('/:productType_id', (req, res) => {
    const productType_id = req.params.productType_id
    if (productTypes.length <= productType_id) {
        return res.json({message: 'Product type not found'})
    }
    res.json(productTypes[productType_id])
})

module.exports = router