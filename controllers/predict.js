require('dotenv').config();
const Clarifai = require('clarifai');
const router = require('express').Router();
const multer = require('multer');
const fs = require('fs');
const axios = require('axios');
const uuidv4 = require('uuid/v4');

const Image = require('../models/image');
const User = require('../models/user');

const DIR = './public/images';

const app = new Clarifai.App({
  apiKey: process.env.CLARIFAI_KEY
});

const downloadImage = async (url, filename) => {
  const writer = fs.createWriteStream(`./public/images/${filename}`);

  const response = await axios({
    url,
    method: 'GET',
    responseType: 'stream'
  });

  response.data.pipe(writer);

  return new Promise((resolve, reject) => {
    writer.on('finish', resolve);
    writer.on('error', reject);
  });
};

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
  const filename = `${uuidv4()}.jpg`;
  await downloadImage(body.url, filename);

  try {
    const imagePath =
      req.protocol + '://' + req.get('host') + '/static/' + filename;

    const user = await User.findOne({ username: body.user.username });
    console.log(user);

    let newImage = new Image({
      img: {
        name: filename,
        path: imagePath,
        data: fs.readFileSync('./public/images/' + filename),
        contentType: 'image/jpg'
      },
      user: user._id
    });

    const savedImage = await newImage.save();

    console.log('saved image', savedImage);

    user.images = [...user.images, savedImage._id];
    await user.save();

    const response = await app.models.predict(
      'e466caa0619f444ab97497640cefc4dc',
      savedImage.img.path
    );
    setTimeout(() => {
      fs.unlinkSync(DIR + '/' + savedImage.img.name);
    }, 2000);
    res.status(200).send(response);
  } catch (err) {
    console.log(err);
    res.status(500).send(new Error('something went wrong'));
  }
});

router.post('/file', upload.single('img'), async (req, res, next) => {
  if (!req.file) return next(new Error('Select a file!'));
  const user = await User.findOne({
    username: JSON.parse(req.body.user).username
  });

  let imagePath =
    req.protocol + '://' + req.get('host') + '/static/' + req.file.filename;
  console.log(imagePath);
  console.log(req.file.path);
  try {
    let newImage = new Image({
      img: {
        name: req.file.filename,
        path: imagePath,
        data: fs.readFileSync(req.file.path),
        contentType: req.file.mimetype
      },
      user: user._id
    });
    const savedImage = await newImage.save();
    console.log('saved image', savedImage);

    user.images = [...user.images, savedImage._id];
    await user.save();

    const response = await app.models.predict(
      'e466caa0619f444ab97497640cefc4dc',
      imagePath
    );
    setTimeout(() => {
      fs.unlinkSync(DIR + '/' + savedImage.img.name);
    }, 2000);
    res.status(200).send(response);
  } catch (err) {
    res.status(500).send(new Error('something went wrong'));
  }
});

module.exports = router;
