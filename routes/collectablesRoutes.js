const {json} = require('body-parser')
const express = require('express')
const router = express.Router()
const collectables = require('../db/collectables.json')

router.get('/', (req, res) => {
    res.json(collectables)
})

router.get('/:collectable_id', (req, res) => {
    const collectable_id = req.params.collectable_id
    if (collectables.length <= collectable_id) {
        return res.json({message: 'Collectable not found'})
    }
    res.json(collectables[collectable_id])
})

module.exports = router