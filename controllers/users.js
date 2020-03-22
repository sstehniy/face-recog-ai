const router = require('express').Router()
const User = require('../models/user')


router.get('/', async (req, res, next) => {
    const users = await User.find({}).populate('images')
    res.json(users.map(u=>u.toJSON()))
})

module.exports = router