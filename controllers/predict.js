require('dotenv').config();
const Clarifai = require('clarifai');
const router = require('express').Router();
const multer = require('multer');
const fs = require('fs');
const uuidv4 = require('uuid/v4');

const Image = require('../models/image');

const DIR = './public/images';

const app = new Clarifai.App({
  apiKey: process.env.CLARIFAI_KEY
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname
      .toLowerCase()
      .split(' ')
      .join('-');
    cb(null, uuidv4() + '-' + fileName);
  }
});

let upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == 'image/png' ||
      file.mimetype == 'image/jpg' ||
      file.mimetype == 'image/jpeg'
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
    }
  }
});

router.post('/url', async (req, res, next) => {
  const body = req.body;

  try {
    const response = await app.models.predict(
      'e466caa0619f444ab97497640cefc4dc',
      body.url
    );
    res.status(200).send(response);
  } catch (err) {
    return new Error(err);
  }
});

router.post('/file', upload.single('img'), async (req, res, next) => {
  if (!req.file) return next(new Error('Select a file!'));
  let imagePath =
    req.protocol + '://' + req.get('host') + '/static/' + req.file.filename;
  console.log(imagePath);
  try {
    const response = await app.models.predict(
      'e466caa0619f444ab97497640cefc4dc',
      imagePath
    );
    
    fs.unlinkSync(`./public/images/${req.file.filename}`, ()=>{console.log('file deleted')})

    res.status(200).send(response);
  } catch (err) {
    return new Error(err);
  }
});

module.exports = router;
