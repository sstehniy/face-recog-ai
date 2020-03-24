// require('newrelic');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const signUpRouter = require('./controllers/signup');
const signInRouter = require('./controllers/signin');
const usersRouter = require('./controllers/users');
const imagesRouter = require('./controllers/images');
const predictRouter = require('./controllers/predict');
const historyRouter = require('./controllers/history')

const unknownEndpoint = require('./utils/errors/unknownEndpoint');

require('dotenv').config();

//Constants
const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;

const app = express();

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(res => console.log('Connected to database'));


app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(express.static('build'));

app.use('/static', express.static('public/images'));
morgan.token('data', (req, res) => {
  return JSON.stringify(req.body);
});
app.use(
  morgan(
    ':method :url :status :response-time ms - :data - :res[content-length]'
  )
);

app.use('/api/signup', signUpRouter);
app.use('/api/signin', signInRouter);
app.use('/api/users', usersRouter);
app.use('/api/images', imagesRouter);
app.use('/api/predict', predictRouter);
app.use('/api/history', historyRouter)

app.use(unknownEndpoint);

app.listen(PORT, () => console.log(`app running on port ${PORT}`));
