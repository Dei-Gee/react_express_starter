const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const db = require('./config/keys').mongoURI;

const stories = require('./routes/api/stories');

const app = express();

//BodyParser MiddleWare
app.use(bodyParser.json());

mongoose
.connect(db,  { useNewUrlParser: true })
.then(() => console.log('MongoDB connected!'))
.catch(err => console.log(err));


//use routes
app.use('/api/stories', stories);

const port = process.env.PORT || 5000;

app.listen(port, () => `Server started on port ${port}`);