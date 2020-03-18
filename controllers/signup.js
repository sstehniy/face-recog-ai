const router = require('express').Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');

router.post('/', async (req, res, next) => {
  try {
    const body = req.body;

    const passwordHash = await bcrypt.hash(body.password, 10)

    const user = new User({
        name: body.name,
        username: body.username,
        email: body.email,
        passwordHash: passwordHash
    })

    const savedUser = await user.save()
    
    res.json(savedUser);
  }catch(err){
    next(err)
  }
});

router.get('/', async (req, res) => {
  res.send('get request');
});

module.exports = router;
