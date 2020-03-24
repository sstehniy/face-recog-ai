const router = require('express').Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/user');
require('dotenv').config();

router.post('/', async (req, res, next) => {
  const  body  = req.body;
  

  const user = await User.findOne({ username: body.username });
  
  const passwordCorrect =
    user === null
      ? false
      : await bcrypt.compare(body.password, user.passwordHash);
  if (!(user && passwordCorrect)) {
    return res.status(401).json({
      error: 'invalid login or password'
    });
  }

  const userForToken = {
      username: user.username,
      if: user._id
  }

  const token = jwt.sign(userForToken, process.env.SECRET)

  res.status(200).send({token, username: user.username, name: user.name, id: user._id})
});

module.exports = router;
