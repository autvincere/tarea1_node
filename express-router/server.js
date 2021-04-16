 //modulo terceros
const express = require('express');
const mongoose = require('mongoose');
const routerV1 = require('./routers')

const app = express();
routerV1(app)

mongoose.connect('mongodb://localhost/node5Gen', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
})
     .then(() => { console.log('Mongo Ok') })
     .catch((err) => console.log(err))

app.listen( 8080, () => {
     console.log('Servidor Ok 8080')
})

//