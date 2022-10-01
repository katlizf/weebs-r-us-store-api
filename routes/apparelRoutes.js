const {json} = require('body-parser')
const express = require('express')
const router = express.Router()
const apparel = require('../db/apparel.json')

router.get('/', (req, res) => {
    res.json(apparel)
})

router.get('/:apparel_id', (req, res) => {
    const apparel_id = req.params.apparel_id
    if (apparel.length <= apparel_id) {
        return res.json({message: 'Apparel not found'})
    }
    res.json(apparel[apparel_id])
})

module.exports = router