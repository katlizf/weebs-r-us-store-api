const express = require('express')
const router = express.Router()
const anime = require('../anime.json')


router.get('/', (req, res) => {
    res.json(anime)
})

router.get('/:anime_id', (req, res) => {
    const anime_id = req.params.anime_id
    if (anime.length <= anime_id) {
        return res.json({message: 'Anime not found'})
    }
    res.json(anime[anime_id])
})

module.exports = router