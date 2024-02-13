const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./src/routes/Route')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use(router);

app.get('*', (req, res) => {
    res.send("<h2>404 Page not found !!</h2>")
});

module.exports = app;