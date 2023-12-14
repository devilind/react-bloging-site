require('dotenv').config()

const express = require('express');
const serverless = require('serverless-http');
const app = express();
const port = process.env.PORT || 3000;
// const cors = require('cors')
const blogRouter = require('../routers/blog');
const subRouter = require('../routers/subscribe');
const contactRouter = require('../routers/contact-us');
const database = require('../database/connector');
var bodyParser = require('body-parser');
// var corsOptions = {
//     origin: '',
//     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
//   }
// app.use(cors());

database()

// bodyParser.urlencoded({extended: true})
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/', blogRouter);
app.use('/api/', subRouter);
app.use('/api', contactRouter);

// app.listen(port, () => {
//     console.log(`Listening on port: ${port}`);
// });

app.use('/.netlify/functions/api', blogRouter)
app.use('/.netlify/functions/api', subRouter)
app.use('/.netlify/functions/api', contactRouter)

module.exports.handler = serverless(app)