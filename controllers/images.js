const router = require('express').Router()
const Image = require('../models/image')

router.get('/', async (req, res, next) => {
   const images = await Image.find({})
   return res.json(images)
})

module.exports = router