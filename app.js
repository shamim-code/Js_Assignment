
//application configuration
let express = require('express');
let app = new express();
let router = require('./src/Routes/api');


//Application path
app.use('/api',router);

module.exports = app;